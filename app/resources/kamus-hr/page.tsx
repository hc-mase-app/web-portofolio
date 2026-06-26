import type { Metadata } from 'next'
import DictionaryPage from '@/components/consulting/dictionary-page'

export const metadata: Metadata = {
  title: 'KAMUS HR | YM-ID',
  description:
    'Kamus istilah Human Resources, organisasi, kepemimpinan, dan people development dalam bahasa Indonesia.',
}

export default function KamusHrPage() {
  return <DictionaryPage />
}
