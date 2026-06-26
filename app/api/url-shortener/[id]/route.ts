import { NextRequest } from 'next/server'
import {
  deleteShortLink,
  updateShortLinkStatus,
} from '@/lib/url-shortener/db'
import { adminUnauthorizedResponse, isAdminRequest } from '@/lib/url-shortener/admin-auth'

type RouteContext = {
  params: Promise<{ id: string }>
}

type UpdateLinkBody = {
  isActive?: boolean
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!isAdminRequest(request)) {
    return adminUnauthorizedResponse()
  }

  let body: UpdateLinkBody

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Request body tidak valid.' }, { status: 400 })
  }

  if (typeof body.isActive !== 'boolean') {
    return Response.json({ error: 'Status link tidak valid.' }, { status: 400 })
  }

  const { id } = await context.params
  const link = await updateShortLinkStatus(id, body.isActive)

  if (!link) {
    return Response.json({ error: 'Link tidak ditemukan.' }, { status: 404 })
  }

  return Response.json({ link })
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!isAdminRequest(request)) {
    return adminUnauthorizedResponse()
  }

  const { id } = await context.params
  const deleted = await deleteShortLink(id)

  if (!deleted) {
    return Response.json({ error: 'Link tidak ditemukan.' }, { status: 404 })
  }

  return Response.json({ ok: true })
}
