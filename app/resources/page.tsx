import type { Metadata } from 'next'
import ConsultingResourcesPage from '@/components/consulting/resources-page'

export const metadata: Metadata = {
  title: 'Resources | YM-ID',
  description:
    'KAMUS HR, tautan kalkulator pajak resmi, serta insight bisnis, organisasi, dan empowering leadership.',
}

export default function ResourcesPage() {
  return <ConsultingResourcesPage />
}
