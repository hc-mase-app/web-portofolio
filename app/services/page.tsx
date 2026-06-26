import type { Metadata } from 'next'
import ConsultingServicesPage from '@/components/consulting/services-page'

export const metadata: Metadata = {
  title: 'Services | YM-ID',
  description:
    'Layanan konsultasi organisasi, leadership development, website, dan solusi digital untuk bisnis pemula serta organisasi berkembang.',
}

export default function ServicesPage() {
  return <ConsultingServicesPage />
}
