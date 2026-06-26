'use client'

import { useState, type FormEvent } from 'react'
import {
  BriefcaseBusiness,
  ClipboardCheck,
  FileText,
  Handshake,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Users,
  WalletCards,
} from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { siteData } from '@/lib/site-data'

const serviceCards = [
  {
    title: 'Executive Search',
    description: 'Pencarian kandidat level Supervisor, Manager, dan Head of Department.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Recruitment Support',
    description: 'Dukungan proses rekrutmen mulai dari sourcing, screening CV, hingga shortlist kandidat.',
    icon: Users,
  },
  {
    title: 'Talent Mapping',
    description: 'Pemetaan kandidat berdasarkan industri, pengalaman, kompetensi, lokasi, dan ekspektasi gaji.',
    icon: MapPin,
  },
  {
    title: 'Candidate Assessment',
    description: 'Evaluasi kandidat berdasarkan pengalaman, kompetensi, kesesuaian posisi, dan potensi pengembangan.',
    icon: ClipboardCheck,
  },
]

function Field({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string
  name: string
  placeholder?: string
  type?: string
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-[#07182c]">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
      />
    </label>
  )
}

function SelectField({
  label,
  name,
  options,
  placeholder,
}: {
  label: string
  name: string
  options: string[]
  placeholder: string
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-[#07182c]">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-[#07182c] outline-none transition focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function RecruitmentExecutiveSearchPage() {
  const [whatsappLink, setWhatsappLink] = useState('')
  const [emailLink, setEmailLink] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const getValue = (name: string) => String(formData.get(name) || '-').trim() || '-'
    const message = [
      'Talent Request - Recruitment & Executive Search',
      '',
      'Company Information',
      `Company Name: ${getValue('companyName')}`,
      `PIC Name: ${getValue('picName')}`,
      `Email: ${getValue('email')}`,
      `Phone Number: ${getValue('phoneNumber')}`,
      '',
      'Position Information',
      `Position Title: ${getValue('positionTitle')}`,
      `Number of Vacancies: ${getValue('vacancies')}`,
      `Work Location: ${getValue('workLocation')}`,
      `Employment Type: ${getValue('employmentType')}`,
      '',
      'Requirements',
      `Industry: ${getValue('industry')}`,
      `Minimum Experience: ${getValue('minimumExperience')}`,
      `Salary Range: ${getValue('salaryRange')}`,
      `Expected Join Date: ${getValue('expectedJoinDate')}`,
      '',
      'Job Description',
      getValue('jobDescription'),
      '',
      'Additional Notes',
      getValue('additionalNotes'),
    ].join('\n')

    setWhatsappLink(`${siteData.whatsapp}?text=${encodeURIComponent(message)}`)
    setEmailLink(
      `mailto:${siteData.email}?subject=${encodeURIComponent('Talent Request - Recruitment & Executive Search')}&body=${encodeURIComponent(message)}`
    )
  }

  return (
    <ConsultingShell>
      <section className="bg-white px-5 pb-12 pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#d99a22]">Services / Recruitment</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-[#07182c] sm:text-5xl">
              Recruitment & Executive Search
            </h1>
            <p className="mt-4 text-base font-semibold leading-7 text-[#c88916]">
              Helping companies find the right talent faster, smarter, and more effectively.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700">
              YM-ID membantu perusahaan menemukan kandidat terbaik untuk posisi Staff, Supervisor, Manager, hingga Head
              of Department melalui proses recruitment support, talent mapping, candidate assessment, dan executive
              search.
            </p>
            <a
              href="#talent-request"
              className="mt-7 inline-flex rounded-md bg-[#d99a22] px-7 py-3 text-sm font-bold text-white shadow transition hover:bg-[#eba92e]"
            >
              Request Talent
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-72 w-full max-w-md items-center justify-center rounded-2xl border border-slate-200 bg-[#fbfaf7] shadow-[0_12px_32px_rgba(15,23,42,0.10)]">
              <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-[#d99a22]/12" />
              <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-[#06172a]/8" />
              <div className="relative grid gap-4 text-[#07182c]">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#07182c] bg-white">
                  <Search className="h-12 w-12" />
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Users className="h-14 w-14 rounded-md border border-slate-300 bg-white p-3" />
                  <FileText className="h-14 w-14 rounded-md border border-slate-300 bg-white p-3" />
                  <ClipboardCheck className="h-14 w-14 rounded-md border border-slate-300 bg-white p-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#07182c]">Layanan Kami</h2>
            <span className="mx-auto mt-3 block h-0.5 w-12 bg-[#d99a22]" />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card) => {
              const Icon = card.icon
              return (
                <article
                  key={card.title}
                  className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-[0_4px_18px_rgba(15,23,42,0.08)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-[#fbfaf7] text-[#07182c]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-sm font-extrabold text-[#07182c]">{card.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-700">{card.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#07182c]">Success Fee Model</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-700">
              Model biaya recruitment YM-ID dibuat sederhana dan berbasis hasil. Fee hanya dikenakan apabila kandidat
              yang direkomendasikan resmi bergabung dengan perusahaan.
            </p>
            <p className="mx-auto mt-2 max-w-3xl text-xs leading-6 text-slate-600">
              Fee dihitung dari gaji bulanan kandidat yang disepakati.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
              <div className="text-center lg:border-r lg:border-slate-200 lg:pr-10">
                <p className="text-sm font-extrabold uppercase tracking-wide text-[#07182c]">Success Fee</p>
                <p className="mt-5 bg-gradient-to-r from-[#d99a22] to-[#b56f00] bg-clip-text text-6xl font-extrabold leading-none text-transparent sm:text-7xl">
                  10% - 20%
                </p>
                <p className="mt-4 text-xl font-extrabold text-[#07182c]">Dari gaji bulanan kandidat</p>
                <p className="mx-auto mt-6 inline-flex rounded-md border border-[#d99a22] px-5 py-2 text-xs font-extrabold uppercase tracking-wide text-[#d99a22]">
                  One-time payment only
                </p>
              </div>

              <div>
                <div className="grid gap-5 sm:grid-cols-[88px_1fr] sm:items-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d99a22]/10 text-[#d99a22] sm:mx-0">
                    <FileText className="h-11 w-11" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-base font-extrabold text-[#07182c]">Success fee hanya dibayarkan satu kali</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Setelah kandidat resmi bergabung dengan perusahaan Anda.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <div className="grid gap-4 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
                    <div className="px-2 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#07182c]/8 text-[#07182c]">
                        <Handshake className="h-8 w-8" />
                      </div>
                      <p className="mt-3 text-xs font-extrabold text-[#07182c]">No Hire, No Fee</p>
                      <p className="mt-2 text-[11px] leading-5 text-slate-700">
                        Tidak ada biaya jika kandidat tidak bergabung.
                      </p>
                    </div>
                    <div className="px-2 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#07182c]/8 text-[#07182c]">
                        <WalletCards className="h-8 w-8" />
                      </div>
                      <p className="mt-3 text-xs font-extrabold text-[#07182c]">Tidak Ada Biaya di Muka</p>
                      <p className="mt-2 text-[11px] leading-5 text-slate-700">
                        Anda tidak perlu membayar apapun di awal.
                      </p>
                    </div>
                    <div className="px-2 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#07182c]/8 text-[#07182c]">
                        <ShieldCheck className="h-8 w-8" />
                      </div>
                      <p className="mt-3 text-xs font-extrabold text-[#07182c]">Bayar Setelah Diterima</p>
                      <p className="mt-2 text-[11px] leading-5 text-slate-700">
                        Pembayaran hanya dilakukan setelah kandidat diterima.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 rounded-lg bg-[#fbf3e6] px-5 py-4 text-center text-sm leading-6 text-[#07182c] sm:flex-row sm:justify-center sm:text-left">
              <Info className="h-5 w-5 shrink-0 text-[#d99a22]" />
              <p>
                Besaran fee disesuaikan dengan level posisi, kompleksitas pencarian, dan jumlah kebutuhan tenaga kerja.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <aside id="talent-request" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.10)]">
            <h2 className="text-2xl font-bold text-[#07182c]">Need Talent?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Ajukan kebutuhan kandidat secara online dan tim YM-ID akan membantu proses pencarian kandidat sesuai
              kebutuhan perusahaan Anda.
            </p>
            <p className="mt-2 rounded-md bg-[#fbfaf7] px-4 py-3 text-xs leading-5 text-slate-600">
              Tim YM-ID akan menghubungi Anda setelah request diterima. Setelah mengisi form, pilih kirim melalui
              WhatsApp atau Email.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              <section>
                <h3 className="text-sm font-extrabold text-[#07182c]">Company Information</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <Field label="Company Name" name="companyName" placeholder="Masukkan nama perusahaan" />
                  <Field label="PIC Name" name="picName" placeholder="Nama PIC" />
                  <Field label="Email" name="email" type="email" placeholder="nama@perusahaan.com" />
                  <Field label="Phone Number" name="phoneNumber" placeholder="08xxxxxxxxxx" />
                </div>
              </section>

              <section>
                <h3 className="text-sm font-extrabold text-[#07182c]">Position Information</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <Field label="Position Title" name="positionTitle" placeholder="Contoh: HR Manager" />
                  <Field label="Number of Vacancies" name="vacancies" type="number" placeholder="Contoh: 2" />
                  <Field label="Work Location" name="workLocation" placeholder="Contoh: Jakarta" />
                  <SelectField
                    label="Employment Type"
                    name="employmentType"
                    placeholder="Pilih jenis employment"
                    options={['PKWT', 'PKWTT', 'Contract', 'Project Based']}
                  />
                </div>
              </section>

              <section>
                <h3 className="text-sm font-extrabold text-[#07182c]">Requirements</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <Field label="Industry" name="industry" placeholder="Contoh: Mining, Retail, Manufacturing" />
                  <Field label="Minimum Experience" name="minimumExperience" placeholder="Contoh: 5 tahun" />
                  <Field label="Salary Range" name="salaryRange" placeholder="Contoh: 15 - 20 Juta" />
                  <Field label="Expected Join Date" name="expectedJoinDate" type="date" />
                </div>
              </section>

              <section>
                <h3 className="text-sm font-extrabold text-[#07182c]">Job Description</h3>
                <label className="mt-3 block">
                  <span className="text-xs font-bold text-[#07182c]">Job Desk / Tanggung Jawab Posisi</span>
                  <textarea
                    name="jobDescription"
                    rows={6}
                    placeholder="Tuliskan ringkasan job desk, tanggung jawab utama, kualifikasi wajib, dan skill yang dibutuhkan."
                    className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
                  />
                </label>
              </section>

              <label className="block">
                <span className="text-sm font-extrabold text-[#07182c]">Additional Notes</span>
                <textarea
                  name="additionalNotes"
                  rows={5}
                  placeholder="Tulis kebutuhan tambahan atau catatan penting lainnya."
                  className="mt-3 w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
                />
              </label>

              <button
                type="submit"
                className="rounded-md bg-[#d99a22] px-6 py-3 text-sm font-bold uppercase text-white shadow transition hover:bg-[#eba92e]"
              >
                Submit Talent Request
              </button>

              {whatsappLink && emailLink ? (
                <div className="rounded-lg border border-[#d99a22]/30 bg-[#fbfaf7] p-4">
                  <p className="text-sm font-bold text-[#07182c]">Pilih metode pengiriman request</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Sistem sudah menyusun pesan dari data form. Silakan pilih WhatsApp atau Email, lalu tekan Send di
                    aplikasi yang terbuka.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#06172a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b3554]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Kirim via WhatsApp
                    </a>
                    <a
                      href={emailLink}
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-[#d99a22] bg-white px-5 py-3 text-sm font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white"
                    >
                      <Mail className="h-4 w-4" />
                      Kirim via Email
                    </a>
                  </div>
                </div>
              ) : null}
            </form>
          </aside>
        </div>
      </section>
    </ConsultingShell>
  )
}
