import type { Metadata } from 'next'
import ConsultingCvAtsGeneratorPage from '@/components/consulting/cv-ats-generator-page'

export const metadata: Metadata = {
  title: 'CV ATS Generator | YM-ID',
  description:
    'Buat CV satu kolom yang lebih mudah dibaca ATS dari data kandidat, pengalaman kerja, skill, dan target posisi.',
}

export default function CvAtsGeneratorPage() {
  return <ConsultingCvAtsGeneratorPage />
}
