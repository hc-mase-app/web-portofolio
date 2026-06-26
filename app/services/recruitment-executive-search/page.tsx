import type { Metadata } from 'next'
import RecruitmentExecutiveSearchPage from '@/components/consulting/recruitment-executive-search-page'

export const metadata: Metadata = {
  title: 'Recruitment & Executive Search | YM-ID',
  description:
    'Recruitment support, talent mapping, candidate assessment, dan executive search untuk membantu perusahaan menemukan kandidat terbaik.',
}

export default function RecruitmentExecutiveSearchRoute() {
  return <RecruitmentExecutiveSearchPage />
}
