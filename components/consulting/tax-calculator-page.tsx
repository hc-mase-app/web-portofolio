'use client'

import { useMemo, useState } from 'react'
import { Calculator, Download, Info, ReceiptText, RotateCcw } from 'lucide-react'
import {
  BPJS_HEALTH_WAGE_CAP,
  calculateSalaryAndTax,
  JHT_WORKER_RATE,
  JP_WAGE_CAP,
  JP_WORKER_RATE,
  PTKP_OPTIONS,
  type PtkpStatus,
} from '@/lib/tax-calculator'
import { ConsultingShell } from './site-shell'

const currencyFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

const percentFormatter = new Intl.NumberFormat('id-ID', {
  style: 'percent',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

function parseNumber(value: string) {
  const normalized = value.replace(/[^\d]/g, '')
  return normalized ? Number(normalized) : 0
}

function formatNumberInput(value: string) {
  const number = parseNumber(value)
  return number ? new Intl.NumberFormat('id-ID').format(number) : ''
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 py-3 last:border-b-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="text-right text-sm font-extrabold text-[#07182c]">{value}</span>
    </div>
  )
}

function DeductionToggle({
  checked,
  description,
  label,
  onChange,
}: {
  checked: boolean
  description: string
  label: string
  onChange: (checked: boolean) => void
}) {
  return (
    <label className={`flex gap-3 rounded-lg border p-3 transition ${checked ? 'border-[#d99a22] bg-[#fff8ec]' : 'border-slate-200 bg-white'}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#d99a22]"
      />
      <span>
        <span className="block text-sm font-extrabold text-[#07182c]">{label}</span>
        <span className="mt-1 block text-xs leading-5 text-slate-600">{description}</span>
      </span>
    </label>
  )
}

export default function TaxCalculatorPage() {
  const [grossIncome, setGrossIncome] = useState('8.000.000')
  const [ptkpStatus, setPtkpStatus] = useState<PtkpStatus>('TK/0')
  const [previouslyWithheld, setPreviouslyWithheld] = useState('')
  const [includePph21, setIncludePph21] = useState(true)
  const [includeBpjsKesehatan, setIncludeBpjsKesehatan] = useState(false)
  const [includeJht, setIncludeJht] = useState(false)
  const [includeJp, setIncludeJp] = useState(false)
  const [otherDeduction, setOtherDeduction] = useState('')

  const result = useMemo(
    () =>
      calculateSalaryAndTax({
        grossIncome: parseNumber(grossIncome),
        status: ptkpStatus,
        previouslyWithheld: parseNumber(previouslyWithheld),
        deductions: {
          pph21: includePph21,
          bpjsKesehatan: includeBpjsKesehatan,
          jht: includeJht,
          jp: includeJp,
          otherDeduction: parseNumber(otherDeduction),
        },
      }),
    [grossIncome, includeBpjsKesehatan, includeJht, includeJp, includePph21, otherDeduction, ptkpStatus, previouslyWithheld]
  )

  const resetForm = () => {
    setGrossIncome('')
    setPtkpStatus('TK/0')
    setPreviouslyWithheld('')
    setIncludePph21(true)
    setIncludeBpjsKesehatan(false)
    setIncludeJht(false)
    setIncludeJp(false)
    setOtherDeduction('')
  }

  const pph21Value = includePph21 ? currencyFormatter.format(result.payableTax) : 'Tidak aktif'
  const bpjsKesehatanValue = includeBpjsKesehatan ? currencyFormatter.format(result.bpjsKesehatan) : 'Tidak aktif'
  const jhtValue = includeJht ? currencyFormatter.format(result.jht) : 'Tidak aktif'
  const jpValue = includeJp ? currencyFormatter.format(result.jp) : 'Tidak aktif'

  const handleDownloadPdf = () => {
    const generatedAt = new Intl.DateTimeFormat('id-ID', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date())

    const rows = [
      ['Penghasilan Bruto', currencyFormatter.format(result.grossIncome)],
      ['PTKP', `${ptkpStatus} (${currencyFormatter.format(result.ptkpAmount)})`],
      ['Kategori TER', `Kategori ${result.category}`],
      ['Tarif PPh 21', percentFormatter.format(result.rate)],
      [`PPh 21 - TER ${percentFormatter.format(result.rate)}`, pph21Value],
      ['BPJS Kesehatan - 1%', bpjsKesehatanValue],
      [`JHT - ${percentFormatter.format(JHT_WORKER_RATE)}`, jhtValue],
      [`JP - ${percentFormatter.format(JP_WORKER_RATE)}`, jpValue],
      ['Potongan Lain', currencyFormatter.format(result.otherDeduction)],
      ['Total Potongan', currencyFormatter.format(result.totalDeductions)],
    ]

    const printWindow = window.open('', '_blank', 'width=900,height=1200')
    if (!printWindow) {
      window.print()
      return
    }

    printWindow.document.write(`
      <!doctype html>
      <html lang="id">
        <head>
          <title>Salary & Tax Calculator - YM-ID</title>
          <style>
            * { box-sizing: border-box; }
            body {
              margin: 0;
              background: #f8fafc;
              color: #07182c;
              font-family: Arial, Helvetica, sans-serif;
            }
            main {
              max-width: 794px;
              min-height: 1123px;
              margin: 0 auto;
              background: #ffffff;
              padding: 40px;
            }
            .eyebrow {
              color: #c88916;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }
            h1 {
              margin: 10px 0 8px;
              font-size: 28px;
              line-height: 1.2;
            }
            .subtitle {
              margin: 0;
              color: #475569;
              font-size: 12px;
              line-height: 1.6;
            }
            .summary {
              margin-top: 28px;
              border-radius: 10px;
              background: #06172a;
              color: #ffffff;
              padding: 22px;
            }
            .summary-label {
              color: #d99a22;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }
            .summary-value {
              margin-top: 8px;
              font-size: 34px;
              font-weight: 800;
            }
            .ter {
              margin-top: 18px;
              border: 1px solid rgba(217, 154, 34, 0.35);
              border-radius: 10px;
              background: #fff8ec;
              padding: 16px;
              font-size: 12px;
              line-height: 1.6;
            }
            table {
              width: 100%;
              margin-top: 22px;
              border-collapse: collapse;
              font-size: 12px;
            }
            th {
              background: #fbfaf7;
              color: #07182c;
              text-align: left;
              font-size: 11px;
              letter-spacing: 0.05em;
              text-transform: uppercase;
            }
            th, td {
              border-bottom: 1px solid #e2e8f0;
              padding: 12px 10px;
            }
            td:last-child {
              text-align: right;
              font-weight: 700;
            }
            .note {
              margin-top: 22px;
              border-left: 4px solid #d99a22;
              background: #fff8ec;
              padding: 14px 16px;
              color: #475569;
              font-size: 11px;
              line-height: 1.6;
            }
            .footer {
              margin-top: 26px;
              color: #64748b;
              font-size: 10px;
            }
            @page { size: A4; margin: 14mm; }
            @media print {
              body { background: #ffffff; }
              main { max-width: none; min-height: auto; padding: 0; }
            }
          </style>
        </head>
        <body>
          <main>
            <div class="eyebrow">YM-ID Resources</div>
            <h1>Salary & Tax Calculator</h1>
            <p class="subtitle">Estimasi PPh 21, potongan BPJS/JHT/JP, dan take home pay bulanan.</p>

            <section class="summary">
              <div class="summary-label">Take Home Pay</div>
              <div class="summary-value">${currencyFormatter.format(result.takeHomePay)}</div>
            </section>

            <section class="ter">
              <strong>Kategori TER: ${result.category}</strong><br />
              Tarif PPh 21: <strong>${percentFormatter.format(result.rate)}</strong><br />
              Dipilih otomatis dari PTKP ${ptkpStatus} dan bruto ${currencyFormatter.format(result.grossIncome)}.
            </section>

            <table>
              <thead>
                <tr><th>Komponen</th><th>Nilai</th></tr>
              </thead>
              <tbody>
                ${rows.map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`).join('')}
              </tbody>
            </table>

            <div class="note">
              Hasil ini bersifat estimasi dan bukan pengganti perhitungan pajak resmi. Untuk keputusan pajak resmi,
              verifikasi kembali dengan regulasi DJP terbaru atau konsultan pajak.
            </div>
            <div class="footer">Dibuat melalui YM-ID Salary & Tax Calculator pada ${generatedAt}.</div>
          </main>
          <script>
            window.onload = () => {
              window.print();
              window.onafterprint = () => window.close();
            };
          </script>
        </body>
      </html>
    `)
    printWindow.document.close()
  }

  return (
    <ConsultingShell>
      <section className="bg-[#fbfaf7] px-5 pb-12 pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-[#d99a22]">Resources / Salary & Tax</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#07182c] sm:text-5xl">
              Salary & Tax Calculator
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Hitung estimasi PPh 21 bulanan dan pilih potongan tambahan seperti BPJS Kesehatan, JHT, JP, atau
              potongan lain untuk melihat perkiraan take home pay.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#06172a] text-[#d99a22]">
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#07182c]">Data Penghasilan</h2>
                  <p className="mt-1 text-xs text-slate-600">Kode objek awal: 21-100-01 Pegawai Tetap</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <label className="block">
                  <span className="text-xs font-bold text-[#07182c]">Penghasilan Bruto Bulanan</span>
                  <div className="mt-2 flex overflow-hidden rounded-md border border-slate-300 bg-white focus-within:border-[#d99a22] focus-within:ring-2 focus-within:ring-[#d99a22]/20">
                    <span className="flex items-center border-r border-slate-200 bg-[#fbfaf7] px-3 text-sm font-bold text-slate-600">Rp</span>
                    <input
                      value={grossIncome}
                      onChange={(event) => setGrossIncome(formatNumberInput(event.target.value))}
                      inputMode="numeric"
                      placeholder="Contoh: 8.000.000"
                      className="w-full px-3 py-3 text-sm text-[#07182c] outline-none placeholder:text-slate-400"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-[#07182c]">PTKP</span>
                  <select
                    value={ptkpStatus}
                    onChange={(event) => setPtkpStatus(event.target.value as PtkpStatus)}
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-[#07182c] outline-none transition focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
                  >
                    {PTKP_OPTIONS.map((option) => (
                      <option key={option.status} value={option.status}>
                        {option.status} - {currencyFormatter.format(option.amount)} / tahun
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-[#07182c]">
                    PPh 21 yang Sudah Dipotong
                  </span>
                  <input
                    value={previouslyWithheld}
                    onChange={(event) => setPreviouslyWithheld(formatNumberInput(event.target.value))}
                    inputMode="numeric"
                    placeholder="Opsional"
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
                  />
                </label>
              </div>

              <div className="mt-6">
                <p className="text-sm font-extrabold text-[#07182c]">Komponen Potongan</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Aktifkan hanya komponen yang ingin dimasukkan ke estimasi.
                </p>
                <div className="mt-4 grid gap-3">
                  <DeductionToggle
                    checked={includePph21}
                    description="TER otomatis berdasarkan PTKP dan bruto bulanan."
                    label="PPh 21"
                    onChange={setIncludePph21}
                  />
                  <DeductionToggle
                    checked={includeBpjsKesehatan}
                    description={`1% dari upah, dasar maksimal ${currencyFormatter.format(BPJS_HEALTH_WAGE_CAP)}.`}
                    label="BPJS Kesehatan"
                    onChange={setIncludeBpjsKesehatan}
                  />
                  <DeductionToggle
                    checked={includeJht}
                    description={`${percentFormatter.format(JHT_WORKER_RATE)} dari upah bulanan.`}
                    label="JHT"
                    onChange={setIncludeJht}
                  />
                  <DeductionToggle
                    checked={includeJp}
                    description={`${percentFormatter.format(JP_WORKER_RATE)} dari upah, dasar maksimal ${currencyFormatter.format(JP_WAGE_CAP)}.`}
                    label="JP"
                    onChange={setIncludeJp}
                  />
                </div>
                <label className="mt-3 block">
                  <span className="text-xs font-bold text-[#07182c]">Potongan Lain</span>
                  <input
                    value={otherDeduction}
                    onChange={(event) => setOtherDeduction(formatNumberInput(event.target.value))}
                    inputMode="numeric"
                    placeholder="Opsional, contoh: koperasi atau pinjaman"
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
                  />
                </label>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 rounded-md border border-[#d99a22] px-4 py-3 text-xs font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#07182c]/8 text-[#07182c]">
                  <ReceiptText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#07182c]">Estimasi Hasil</h2>
                  <p className="mt-1 text-xs text-slate-600">Hasil berubah otomatis saat data diubah.</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#06172a] p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-wide text-[#d99a22]">Take Home Pay</p>
                <p className="mt-2 text-4xl font-extrabold">{currencyFormatter.format(result.takeHomePay)}</p>
                <p className="mt-2 text-xs leading-5 text-white/70">Setelah komponen potongan aktif.</p>
              </div>

              <button
                type="button"
                onClick={handleDownloadPdf}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#d99a22] px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#eba92e]"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>

              <div className="mt-5 grid gap-3 rounded-lg border border-[#d99a22]/30 bg-[#fff8ec] p-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-[#07182c]">Kategori TER</span>
                  <span className="font-extrabold text-[#c88916]">Kategori {result.category}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-[#07182c]">Tarif PPh 21</span>
                  <span className="font-extrabold text-[#c88916]">{percentFormatter.format(result.rate)}</span>
                </div>
                <p className="text-xs leading-5 text-slate-700">
                  Dipilih otomatis dari PTKP {ptkpStatus} dan bruto {currencyFormatter.format(result.grossIncome)}.
                </p>
              </div>

              <div className="mt-5 rounded-lg border border-slate-200 p-4">
                <ResultRow label="Gaji Bruto" value={currencyFormatter.format(result.grossIncome)} />
                <ResultRow label={`PPh 21 - TER ${percentFormatter.format(result.rate)}`} value={pph21Value} />
                <ResultRow label="BPJS Kesehatan - 1%" value={bpjsKesehatanValue} />
                <ResultRow label={`JHT - ${percentFormatter.format(JHT_WORKER_RATE)}`} value={jhtValue} />
                <ResultRow label={`JP - ${percentFormatter.format(JP_WORKER_RATE)}`} value={jpValue} />
                <ResultRow label="Potongan Lain" value={currencyFormatter.format(result.otherDeduction)} />
                <ResultRow label="Total Potongan" value={currencyFormatter.format(result.totalDeductions)} />
              </div>

              <div className="mt-5 flex gap-3 rounded-lg border border-[#d99a22]/30 bg-[#fff8ec] p-4 text-xs leading-6 text-slate-700">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#d99a22]" />
                <p>
                  TER PPh 21 ditentukan otomatis berdasarkan status PTKP dan penghasilan bruto bulanan. Hasil bersifat
                  estimasi dan bukan pengganti perhitungan pajak resmi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConsultingShell>
  )
}
