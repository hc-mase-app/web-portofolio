import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { PageHero } from './shared'
import { Resource3DIcon, ToolsLink3DVisual } from './three-d-visuals'

const tools = [
  [
    'url',
    'URL Shortener',
    'Pendekkan link panjang, gunakan custom alias, buat QR Code, dan pantau click counter.',
    '/tools/url-shortener',
    'BUKA URL SHORTENER',
  ],
  [
    'cv',
    'CV ATS Generator',
    'Buat CV satu kolom yang lebih mudah dibaca ATS dari identitas, pengalaman kerja, skill, dan target posisi.',
    '/tools/cv-ats-generator',
    'BUAT CV ATS',
  ],
  [
    'tax',
    'Salary & Tax Calculator',
    'Hitung estimasi PPh 21, potongan BPJS, JHT, JP, dan perkiraan take home pay bulanan.',
    '/tools/salary-tax-calculator',
    'BUKA KALKULATOR',
  ],
  [
    'dictionary',
    'KAMUS HR',
    'Pelajari istilah Human Resources, organisasi, kepemimpinan, dan ketenagakerjaan dengan bahasa sederhana.',
    '/tools/kamus-hr',
    'BUKA KAMUS HR',
  ],
] as const

export default function ConsultingToolsPage() {
  return (
    <ConsultingShell>
      <PageHero
        label="TOOLS"
        title="Tools Praktis untuk Bekerja Lebih Cepat"
        description="Gunakan alat bantu YM-ID untuk membuat short link, menyusun CV ATS, menghitung estimasi gaji dan pajak, serta mencari istilah HR secara cepat."
        visual={<ToolsLink3DVisual />}
      />

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#07182c]">Jelajahi Tools</h2>
            <span className="mx-auto mt-3 block h-0.5 w-12 bg-[#d99a22]" />
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Pilih tools sesuai kebutuhan. Semua tools dibuat untuk membantu pekerjaan praktis,
              bukan sebagai bahan bacaan.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {tools.map(([type, title, description, href, action], index) => (
              <article
                key={title}
                className={`rounded-lg border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(15,23,42,0.12)] ${
                  index === 0 || index === 3 ? 'border-[#d99a22]' : 'border-slate-200'
                }`}
              >
                <Resource3DIcon type={type} />
                <h3 className="mt-3 text-xl font-bold text-[#07182c]">{title}</h3>
                <p className="mt-3 min-h-28 text-sm leading-7 text-slate-700">{description}</p>
                <Link
                  href={href}
                  className={`mt-5 flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-xs font-bold ${
                    index === 0 || index === 3
                      ? 'bg-[#d99a22] text-white'
                      : 'border border-[#d99a22] text-[#c88916]'
                  }`}
                >
                  {action} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ConsultingShell>
  )
}
