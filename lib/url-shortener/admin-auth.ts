import { NextRequest } from 'next/server'

export function isAdminConfigured() {
  return Boolean(process.env.URL_SHORTENER_ADMIN_TOKEN)
}

export function isAdminRequest(request: NextRequest) {
  const configuredToken = process.env.URL_SHORTENER_ADMIN_TOKEN

  if (!configuredToken) {
    return process.env.NODE_ENV !== 'production'
  }

  const bearerToken = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')
  const headerToken = request.headers.get('x-url-shortener-admin-token')

  return bearerToken === configuredToken || headerToken === configuredToken
}

export function adminUnauthorizedResponse() {
  const configured = isAdminConfigured()

  return Response.json(
    {
      error: configured
        ? 'Admin token tidak valid.'
        : 'Admin token belum dikonfigurasi di production.',
      requiresToken: true,
    },
    { status: configured ? 401 : 503 },
  )
}
