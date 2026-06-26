import type { Metadata } from 'next'
import UrlShortenerPage from '@/components/consulting/url-shortener-page'

export const metadata: Metadata = {
  title: 'URL Shortener | YM-ID',
  description:
    'Buat short URL YM-ID dengan custom alias, QR code, click counter, dan basic analytics.',
}

export default function UrlShortenerRoute() {
  return <UrlShortenerPage />
}
