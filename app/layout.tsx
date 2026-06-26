import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ym-id.com'),
  title: {
    default: 'YM-ID | Business, People & Digital Solutions',
    template: '%s',
  },
  description: 'Solusi konsultasi bisnis dan organisasi, leadership development, website, serta digitalisasi untuk bisnis pemula dan organisasi berkembang.',
  keywords: [
    'Business Consultant',
    'Leadership Training',
    'Website Development',
    'Konsultan Organisasi',
    'Konsultan HR',
    'HR Professional',
    'Human Capital Development',
    'HR Consultant',
    'Organizational Development',
    'Leadership Development',
    'HR Strategy',
    'Jakarta',
    'Indonesia',
  ],
  authors: [{ name: 'Yan Firdaus' }],
  creator: 'Yan Firdaus',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://ym-id.com',
    siteName: 'YM-ID',
    title: 'YM-ID | Business, People & Digital Solutions',
    description: 'Solusi praktis untuk mengembangkan bisnis, organisasi, pemimpin, tim, dan kehadiran digital.',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png'
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
