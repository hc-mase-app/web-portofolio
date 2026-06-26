import QRCode from 'qrcode'
import { NextRequest } from 'next/server'
import {
  createShortLink,
  getShortenerStats,
  listShortLinks,
} from '@/lib/url-shortener/db'
import { adminUnauthorizedResponse, isAdminRequest } from '@/lib/url-shortener/admin-auth'
import { checkRateLimit, getClientIp } from '@/lib/url-shortener/rate-limit'
import {
  generateAlias,
  normalizeAlias,
  validateAlias,
  validateDestinationUrl,
} from '@/lib/url-shortener/validation'

type CreateLinkBody = {
  url?: string
  alias?: string
}

function getBaseUrl(request: NextRequest) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, '')
  }

  return request.nextUrl.origin
}

async function createWithAvailableAlias(input: {
  requestedAlias: string | null
  destinationUrl: string
  baseUrl: string
}) {
  const maxAttempts = input.requestedAlias ? 1 : 5

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const alias = input.requestedAlias || generateAlias()
    const aliasValidation = validateAlias(alias)

    if (!aliasValidation.ok || !aliasValidation.alias) {
      return { error: aliasValidation.message, status: 400 }
    }

    const shortPath = `/s/${aliasValidation.alias}`
    const shortUrl = `${input.baseUrl}${shortPath}`
    const qrCodeSvg = await QRCode.toString(shortUrl, {
      type: 'svg',
      margin: 1,
      width: 180,
      color: {
        dark: '#07182c',
        light: '#ffffff',
      },
    })

    try {
      const link = await createShortLink({
        alias: aliasValidation.alias,
        destinationUrl: input.destinationUrl,
        shortPath,
        qrCodeSvg,
      })

      return { link, shortUrl, status: 201 }
    } catch (error) {
      if (
        typeof error === 'object'
        && error !== null
        && 'code' in error
        && error.code === '23505'
      ) {
        if (input.requestedAlias) {
          return { error: 'Alias sudah digunakan. Pilih alias lain.', status: 409 }
        }

        continue
      }

      throw error
    }
  }

  return { error: 'Gagal membuat alias unik. Coba lagi.', status: 500 }
}

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return adminUnauthorizedResponse()
  }

  const search = request.nextUrl.searchParams.get('search') || ''
  const [links, stats] = await Promise.all([
    listShortLinks(search),
    getShortenerStats(),
  ])

  return Response.json({ links, stats })
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request.headers)
  const rateLimit = checkRateLimit(`create:${ip}`, 10, 60_000)

  if (!rateLimit.allowed) {
    return Response.json(
      { error: 'Terlalu banyak permintaan. Coba lagi sebentar lagi.' },
      { status: 429 },
    )
  }

  let body: CreateLinkBody

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Request body tidak valid.' }, { status: 400 })
  }

  const urlValidation = validateDestinationUrl(body.url || '')
  if (!urlValidation.ok || !urlValidation.url) {
    return Response.json({ error: urlValidation.message }, { status: 400 })
  }

  const requestedAlias = body.alias ? normalizeAlias(body.alias) : null
  const result = await createWithAvailableAlias({
    requestedAlias,
    destinationUrl: urlValidation.url,
    baseUrl: getBaseUrl(request),
  })

  if ('error' in result) {
    return Response.json({ error: result.error }, { status: result.status })
  }

  return Response.json(
    {
      link: result.link,
      shortUrl: result.shortUrl,
    },
    { status: result.status },
  )
}
