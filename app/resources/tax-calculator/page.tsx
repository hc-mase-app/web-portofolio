import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Salary & Tax Calculator | YM-ID',
  description: 'Redirect ke Salary & Tax Calculator YM-ID.',
}

export default function ResourcesTaxCalculatorPage() {
  redirect('/resources/salary-tax-calculator')
}
