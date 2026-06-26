export type PtkpStatus = 'TK/0' | 'TK/1' | 'TK/2' | 'TK/3' | 'K/0' | 'K/1' | 'K/2' | 'K/3'

export type TerCategory = 'A' | 'B' | 'C'

export type SalaryDeductionOptions = {
  pph21: boolean
  bpjsKesehatan: boolean
  jht: boolean
  jp: boolean
  otherDeduction: number
}

type TerBracket = {
  max: number
  rate: number
}

export const BPJS_HEALTH_WORKER_RATE = 0.01
export const BPJS_HEALTH_WAGE_CAP = 12000000
export const JHT_WORKER_RATE = 0.02
export const JP_WORKER_RATE = 0.01
export const JP_WAGE_CAP = 10547400

const TER_TABLES: Record<TerCategory, TerBracket[]> = {
  A: [
    { max: 5400000, rate: 0 },
    { max: 5650000, rate: 0.0025 },
    { max: 5950000, rate: 0.005 },
    { max: 6300000, rate: 0.0075 },
    { max: 6750000, rate: 0.01 },
    { max: 7500000, rate: 0.0125 },
    { max: 8550000, rate: 0.015 },
    { max: 9650000, rate: 0.0175 },
    { max: 10050000, rate: 0.02 },
    { max: 10350000, rate: 0.0225 },
    { max: 10700000, rate: 0.025 },
    { max: 11050000, rate: 0.03 },
    { max: 11600000, rate: 0.035 },
    { max: 12500000, rate: 0.04 },
    { max: 13750000, rate: 0.05 },
    { max: 15100000, rate: 0.06 },
    { max: 16950000, rate: 0.07 },
    { max: 19750000, rate: 0.08 },
    { max: 24150000, rate: 0.09 },
    { max: 26450000, rate: 0.1 },
    { max: 28000000, rate: 0.11 },
    { max: 30050000, rate: 0.12 },
    { max: 32400000, rate: 0.13 },
    { max: 35400000, rate: 0.14 },
    { max: 39100000, rate: 0.15 },
    { max: 43850000, rate: 0.16 },
    { max: 47800000, rate: 0.17 },
    { max: 51400000, rate: 0.18 },
    { max: 56300000, rate: 0.19 },
    { max: 62200000, rate: 0.2 },
    { max: 68600000, rate: 0.21 },
    { max: 77500000, rate: 0.22 },
    { max: 89000000, rate: 0.23 },
    { max: 103000000, rate: 0.24 },
    { max: 125000000, rate: 0.25 },
    { max: 157000000, rate: 0.26 },
    { max: 206000000, rate: 0.27 },
    { max: 337000000, rate: 0.28 },
    { max: 454000000, rate: 0.29 },
    { max: 550000000, rate: 0.3 },
    { max: 695000000, rate: 0.31 },
    { max: 910000000, rate: 0.32 },
    { max: 1400000000, rate: 0.33 },
    { max: Infinity, rate: 0.34 },
  ],
  B: [
    { max: 6200000, rate: 0 },
    { max: 6500000, rate: 0.0025 },
    { max: 6850000, rate: 0.005 },
    { max: 7300000, rate: 0.0075 },
    { max: 9200000, rate: 0.01 },
    { max: 10750000, rate: 0.015 },
    { max: 11250000, rate: 0.02 },
    { max: 11600000, rate: 0.025 },
    { max: 12600000, rate: 0.03 },
    { max: 13600000, rate: 0.04 },
    { max: 14950000, rate: 0.05 },
    { max: 16400000, rate: 0.06 },
    { max: 18450000, rate: 0.07 },
    { max: 21850000, rate: 0.08 },
    { max: 26000000, rate: 0.09 },
    { max: 27700000, rate: 0.1 },
    { max: 29350000, rate: 0.11 },
    { max: 31450000, rate: 0.12 },
    { max: 33950000, rate: 0.13 },
    { max: 37100000, rate: 0.14 },
    { max: 41100000, rate: 0.15 },
    { max: 45800000, rate: 0.16 },
    { max: 49500000, rate: 0.17 },
    { max: 53800000, rate: 0.18 },
    { max: 58500000, rate: 0.19 },
    { max: 64000000, rate: 0.2 },
    { max: 71000000, rate: 0.21 },
    { max: 80000000, rate: 0.22 },
    { max: 93000000, rate: 0.23 },
    { max: 109000000, rate: 0.24 },
    { max: 129000000, rate: 0.25 },
    { max: 163000000, rate: 0.26 },
    { max: 211000000, rate: 0.27 },
    { max: 374000000, rate: 0.28 },
    { max: 459000000, rate: 0.29 },
    { max: 555000000, rate: 0.3 },
    { max: 704000000, rate: 0.31 },
    { max: 957000000, rate: 0.32 },
    { max: 1405000000, rate: 0.33 },
    { max: Infinity, rate: 0.34 },
  ],
  C: [
    { max: 6600000, rate: 0 },
    { max: 6950000, rate: 0.0025 },
    { max: 7350000, rate: 0.005 },
    { max: 7800000, rate: 0.0075 },
    { max: 8850000, rate: 0.01 },
    { max: 9800000, rate: 0.0125 },
    { max: 10950000, rate: 0.015 },
    { max: 11200000, rate: 0.0175 },
    { max: 12050000, rate: 0.02 },
    { max: 12950000, rate: 0.03 },
    { max: 14150000, rate: 0.04 },
    { max: 15550000, rate: 0.05 },
    { max: 17050000, rate: 0.06 },
    { max: 19500000, rate: 0.07 },
    { max: 22700000, rate: 0.08 },
    { max: 26600000, rate: 0.09 },
    { max: 28100000, rate: 0.1 },
    { max: 30100000, rate: 0.11 },
    { max: 32600000, rate: 0.12 },
    { max: 35400000, rate: 0.13 },
    { max: 38900000, rate: 0.14 },
    { max: 43000000, rate: 0.15 },
    { max: 47400000, rate: 0.16 },
    { max: 51200000, rate: 0.17 },
    { max: 55800000, rate: 0.18 },
    { max: 60400000, rate: 0.19 },
    { max: 66700000, rate: 0.2 },
    { max: 74500000, rate: 0.21 },
    { max: 83200000, rate: 0.22 },
    { max: 95600000, rate: 0.23 },
    { max: 110000000, rate: 0.24 },
    { max: 134000000, rate: 0.25 },
    { max: 169000000, rate: 0.26 },
    { max: 221000000, rate: 0.27 },
    { max: 390000000, rate: 0.28 },
    { max: 463000000, rate: 0.29 },
    { max: 561000000, rate: 0.3 },
    { max: 709000000, rate: 0.31 },
    { max: 965000000, rate: 0.32 },
    { max: 1419000000, rate: 0.33 },
    { max: Infinity, rate: 0.34 },
  ],
}

export const PTKP_OPTIONS: Array<{ status: PtkpStatus; amount: number; category: TerCategory }> = [
  { status: 'TK/0', amount: 54000000, category: 'A' },
  { status: 'TK/1', amount: 58500000, category: 'A' },
  { status: 'TK/2', amount: 63000000, category: 'B' },
  { status: 'TK/3', amount: 67500000, category: 'B' },
  { status: 'K/0', amount: 58500000, category: 'A' },
  { status: 'K/1', amount: 63000000, category: 'B' },
  { status: 'K/2', amount: 67500000, category: 'B' },
  { status: 'K/3', amount: 72000000, category: 'C' },
]

export function getPtkpOption(status: PtkpStatus) {
  return PTKP_OPTIONS.find((option) => option.status === status) ?? PTKP_OPTIONS[0]
}

export function getMonthlyTerRate(grossIncome: number, category: TerCategory) {
  return TER_TABLES[category].find((bracket) => grossIncome <= bracket.max)?.rate ?? 0
}

export function calculateMonthlyPph21({
  grossIncome,
  status,
  previouslyWithheld = 0,
}: {
  grossIncome: number
  status: PtkpStatus
  previouslyWithheld?: number
}) {
  const ptkp = getPtkpOption(status)
  const rate = getMonthlyTerRate(grossIncome, ptkp.category)
  const calculatedTax = Math.max(0, Math.round(grossIncome * rate))
  const payableTax = Math.max(0, calculatedTax - previouslyWithheld)
  const takeHomePay = Math.max(0, grossIncome - payableTax)

  return {
    category: ptkp.category,
    ptkpAmount: ptkp.amount,
    rate,
    grossIncome,
    calculatedTax,
    previouslyWithheld,
    payableTax,
    takeHomePay,
  }
}

export function calculateSalaryAndTax({
  grossIncome,
  status,
  previouslyWithheld = 0,
  deductions,
}: {
  grossIncome: number
  status: PtkpStatus
  previouslyWithheld?: number
  deductions: SalaryDeductionOptions
}) {
  const pph21 = calculateMonthlyPph21({ grossIncome, status, previouslyWithheld })
  const bpjsKesehatan = deductions.bpjsKesehatan
    ? Math.round(Math.min(grossIncome, BPJS_HEALTH_WAGE_CAP) * BPJS_HEALTH_WORKER_RATE)
    : 0
  const jht = deductions.jht ? Math.round(grossIncome * JHT_WORKER_RATE) : 0
  const jp = deductions.jp ? Math.round(Math.min(grossIncome, JP_WAGE_CAP) * JP_WORKER_RATE) : 0
  const otherDeduction = Math.max(0, deductions.otherDeduction)
  const pph21Payable = deductions.pph21 ? pph21.payableTax : 0
  const totalDeductions = pph21Payable + bpjsKesehatan + jht + jp + otherDeduction

  return {
    ...pph21,
    payableTax: pph21Payable,
    bpjsKesehatan,
    jht,
    jp,
    otherDeduction,
    totalDeductions,
    takeHomePay: Math.max(0, grossIncome - totalDeductions),
  }
}
