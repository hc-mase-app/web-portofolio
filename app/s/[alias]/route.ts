import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { recordClick } from '@/lib/url-shortener/db'
import { checkRateLimit, getClientIp } from '@/lib/url-shortener/rate-limit'
import { normalizeAlias, validateAlias } from '@/lib/url-shortener/validation'

type RouteContext = {
  params: Promise<{ alias: string }>
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { alias: rawAlias } = await context.params
  const alias = normalizeAlias(rawAlias)
  const aliasValidation = validateAlias(alias)

  if (!aliasValidation.ok) {
    return new Response('Short link not found.', { status: 404 })
  }

  const ip = getClientIp(request.headers)
  const rateLimit = checkRateLimit(`redirect:${ip}:${alias}`, 120, 60_000)

  if (!rateLimit.allowed) {
    return new Response('Too many requests.', { status: 429 })
  }

  const link = await recordClick({
    alias,
    referrer: request.headers.get('referer'),
    userAgent: request.headers.get('user-agent'),
    ip,
  })

  if (!link) {
    return new Response('Short link not found.', { status: 404 })
  }

  return NextResponse.redirect(link.destinationUrl, 302)
}
