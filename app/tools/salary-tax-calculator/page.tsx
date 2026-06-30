import type { Metadata } from 'next'
import TaxCalculatorPage from '@/components/consulting/tax-calculator-page'

export const metadata: Metadata = {
  title: 'Salary & Tax Calculator | YM-ID Tools',
  description:
    'Hitung estimasi PPh 21, potongan BPJS, JHT, JP, dan perkiraan take home pay bulanan.',
}

export default function ToolsSalaryTaxCalculatorPage() {
  return <TaxCalculatorPage />
}
