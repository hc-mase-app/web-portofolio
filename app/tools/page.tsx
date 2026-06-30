import type { Metadata } from 'next'
import ConsultingToolsPage from '@/components/consulting/tools-page'

export const metadata: Metadata = {
  title: 'Tools | YM-ID',
  description:
    'Tools praktis YM-ID untuk URL shortener, CV ATS generator, salary and tax calculator, dan Kamus HR.',
}

export default function ToolsRoute() {
  return <ConsultingToolsPage />
}
