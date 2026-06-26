import type { Metadata } from 'next'
import AdminUrlShortenerPage from '@/components/consulting/admin-url-shortener-page'

export const metadata: Metadata = {
  title: 'URL Shortener Management | YM-ID Admin',
  description: 'Kelola short URL YM-ID, pantau total link, klik, status aktif, dan hapus tautan.',
}

export default function AdminUrlShortenerRoute() {
  return <AdminUrlShortenerPage />
}
