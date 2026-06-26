'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  Eye,
  FileText,
  Lightbulb,
  Plus,
  User,
  Trash2,
} from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { ConsultationCta } from './shared'

type WorkExperience = {
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  description: string
}

type Certification = {
  name: string
  issuer: string
  issuedDate: string
}

type Education = {
  schoolName: string
  major: string
  graduationYear: string
}

type CvForm = {
  fullName: string
  email: string
  phone: string
  location: string
  birthPlaceDate: string
  targetRole: string
  summary: string
  workExperiences: WorkExperience[]
  education: Education
  skills: string
  certifications: Certification[]
  jobDescription: string
}

type CvSectionId = 'data-diri' | 'pengalaman' | 'pendidikan' | 'skills' | 'sertifikasi' | 'job-description'

const emptyWorkExperience: WorkExperience = {
  jobTitle: '',
  company: '',
  startDate: '',
  endDate: '',
  description: '',
}

const emptyCertification: Certification = {
  name: '',
  issuer: '',
  issuedDate: '',
}

const emptyEducation: Education = {
  schoolName: '',
  major: '',
  graduationYear: '',
}

const cvSections: Array<{ id: CvSectionId; label: string; step: string }> = [
  { id: 'data-diri', label: 'Data Diri', step: '1' },
  { id: 'pengalaman', label: 'Pengalaman Kerja', step: '2' },
  { id: 'pendidikan', label: 'Pendidikan', step: '3' },
  { id: 'skills', label: 'Skills', step: '4' },
  { id: 'sertifikasi', label: 'Sertifikasi', step: '5' },
  { id: 'job-description', label: 'Job Description', step: '6' },
]

const initialForm: CvForm = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  birthPlaceDate: '',
  targetRole: '',
  summary: '',
  workExperiences: [{ ...emptyWorkExperience }],
  education: { ...emptyEducation },
  skills: '',
  certifications: [{ ...emptyCertification }],
  jobDescription: '',
}

const stopWords = new Set([
  'yang',
  'dan',
  'atau',
  'untuk',
  'dengan',
  'dalam',
  'pada',
  'sebagai',
  'serta',
  'dari',
  'the',
  'and',
  'for',
  'with',
  'to',
  'of',
  'in',
  'a',
  'an',
])

function getKeywords(text: string) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => word.length > 3 && !stopWords.has(word))

  return Array.from(new Set(words)).slice(0, 14)
}

function splitList(value: string) {
  return value
    .split(/,|\n/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  helper,
  multiline = false,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  helper?: string
  multiline?: boolean
}) {
  const inputClass =
    'mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20'

  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wide text-slate-600">{label}</span>
      {helper ? <span className="mt-1 block text-xs leading-5 text-slate-500">{helper}</span> : null}
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={4}
          className={`${inputClass} resize-none leading-6`}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </label>
  )
}

function PrintResume({ form, matchedKeywords }: { form: CvForm; matchedKeywords: string[] }) {
  const skills = splitList(form.skills)
  const certifications = form.certifications.filter(
    (certification) => certification.name || certification.issuer || certification.issuedDate
  )
  const educationDetails = [form.education.major, form.education.graduationYear].filter(Boolean).join(' | ')

  return (
    <article id="cv-ats-print-area" className="bg-white p-7 text-[#07182c] shadow-sm print:shadow-none">
      <header className="border-b border-slate-300 pb-4">
        <h2 className="text-2xl font-extrabold uppercase tracking-wide">{form.fullName || 'Nama Kandidat'}</h2>
        <p className="mt-1 text-sm font-semibold text-[#c88916]">{form.targetRole || 'Target Posisi'}</p>
        <p className="mt-3 text-xs leading-5 text-slate-600">
          {[form.email, form.phone, form.location, form.birthPlaceDate].filter(Boolean).join(' | ')}
        </p>
      </header>

      <section className="mt-5">
        <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#07182c]">Professional Summary</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{form.summary || 'Tuliskan ringkasan profil profesional.'}</p>
      </section>

      <section className="mt-5">
        <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#07182c]">Work Experience</h3>
        <div className="mt-3 grid gap-4">
          {form.workExperiences.some((experience) => experience.jobTitle || experience.company || experience.description) ? (
            form.workExperiences.map((experience, index) => {
              const period = [experience.startDate, experience.endDate].filter(Boolean).join(' - ')
              return (
                <div key={`${experience.company}-${experience.jobTitle}-${index}`}>
                  <p className="text-sm font-bold text-[#07182c]">{experience.jobTitle || 'Nama Jabatan'}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-600">
                    {[experience.company || 'Nama Perusahaan', period].filter(Boolean).join(' | ')}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-700">
                    {experience.description || 'Tuliskan job description, tanggung jawab, dan pencapaian.'}
                  </p>
                </div>
              )
            })
          ) : (
            <p className="text-sm leading-6 text-slate-700">Tuliskan pengalaman kerja utama.</p>
          )}
        </div>
      </section>

      <section className="mt-5">
        <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#07182c]">Education</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          {form.education.schoolName || 'Nama sekolah terakhir'}
          {educationDetails ? <span className="text-slate-600"> ({educationDetails})</span> : null}
        </p>
      </section>

      <section className="mt-5">
        <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#07182c]">Skills</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {(skills.length ? skills : matchedKeywords).slice(0, 12).map((skill) => (
            <span key={skill} className="rounded border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#07182c]">Certifications</h3>
        <ul className="mt-2 grid gap-1 text-sm leading-6 text-slate-700">
          {certifications.length ? (
            certifications.map((certification, index) => {
              const details = [certification.issuer, certification.issuedDate].filter(Boolean).join(' | ')
              return (
                <li key={`${certification.name}-${index}`}>
                  - {certification.name || 'Nama Sertifikasi'}
                  {details ? <span className="text-slate-600"> ({details})</span> : null}
                </li>
              )
            })
          ) : (
            <li>- Tambahkan sertifikasi relevan</li>
          )}
        </ul>
      </section>
    </article>
  )
}

export default function ConsultingCvAtsGeneratorPage() {
  const [form, setForm] = useState<CvForm>(initialForm)
  const [activeSection, setActiveSection] = useState<CvSectionId>('data-diri')
  const workExperienceText = form.workExperiences
    .map((experience) =>
      [
        experience.jobTitle,
        experience.company,
        experience.startDate,
        experience.endDate,
        experience.description,
      ].join(' ')
    )
    .join(' ')
  const certificationText = form.certifications
    .map((certification) => [certification.name, certification.issuer, certification.issuedDate].join(' '))
    .join(' ')
  const educationText = [
    form.education.schoolName,
    form.education.major,
    form.education.graduationYear,
  ].join(' ')

  const resumeText = [
    form.targetRole,
    form.summary,
    workExperienceText,
    form.birthPlaceDate,
    educationText,
    form.skills,
    certificationText,
  ]
    .join(' ')
    .toLowerCase()

  const keywords = getKeywords(form.jobDescription)
  const matchedKeywords = keywords.filter((keyword) => resumeText.includes(keyword))
  const missingKeywords = keywords.filter((keyword) => !resumeText.includes(keyword))
  const atsScore = keywords.length ? Math.round((matchedKeywords.length / keywords.length) * 100) : 0
  const sectionProgress = [
    Boolean(form.fullName && form.email && form.targetRole),
    form.workExperiences.some((experience) => experience.jobTitle || experience.company || experience.description),
    Boolean(form.education.schoolName || form.education.major || form.education.graduationYear),
    Boolean(splitList(form.skills).length),
    form.certifications.some((certification) => certification.name || certification.issuer || certification.issuedDate),
    Boolean(form.jobDescription.trim()),
  ]
  const activeSectionIndex = cvSections.findIndex((section) => section.id === activeSection)
  const activeSectionMeta = cvSections[activeSectionIndex] ?? cvSections[0]

  const updateField = (field: keyof CvForm) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const updateWorkExperience = (index: number, field: keyof WorkExperience) => (value: string) => {
    setForm((current) => ({
      ...current,
      workExperiences: current.workExperiences.map((experience, experienceIndex) =>
        experienceIndex === index ? { ...experience, [field]: value } : experience
      ),
    }))
  }

  const updateEducation = (field: keyof Education) => (value: string) => {
    setForm((current) => ({
      ...current,
      education: { ...current.education, [field]: value },
    }))
  }

  const updateCertification = (index: number, field: keyof Certification) => (value: string) => {
    setForm((current) => ({
      ...current,
      certifications: current.certifications.map((certification, certificationIndex) =>
        certificationIndex === index ? { ...certification, [field]: value } : certification
      ),
    }))
  }

  const addWorkExperience = () => {
    setForm((current) => ({
      ...current,
      workExperiences: [...current.workExperiences, { ...emptyWorkExperience }],
    }))
  }

  const addCertification = () => {
    setForm((current) => ({
      ...current,
      certifications: [...current.certifications, { ...emptyCertification }],
    }))
  }

  const removeWorkExperience = (index: number) => {
    setForm((current) => ({
      ...current,
      workExperiences:
        current.workExperiences.length === 1
          ? [{ ...emptyWorkExperience }]
          : current.workExperiences.filter((_, experienceIndex) => experienceIndex !== index),
    }))
  }

  const removeCertification = (index: number) => {
    setForm((current) => ({
      ...current,
      certifications:
        current.certifications.length === 1
          ? [{ ...emptyCertification }]
          : current.certifications.filter((_, certificationIndex) => certificationIndex !== index),
    }))
  }

  const handleGenerateDraft = () => {
    document.getElementById('cv-ats-print-area')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePrint = () => {
    const resume = document.getElementById('cv-ats-print-area')
    if (!resume) return

    const printWindow = window.open('', '_blank', 'width=900,height=1200')
    if (!printWindow) {
      window.print()
      return
    }

    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <title>${form.fullName || 'CV'} - ATS CV</title>
          <style>
            * { box-sizing: border-box; }
            body { margin: 0; background: #f8fafc; color: #07182c; font-family: Arial, Helvetica, sans-serif; }
            main { max-width: 794px; min-height: 1123px; margin: 0 auto; background: white; }
            article { box-shadow: none !important; }
            @page { size: A4; margin: 14mm; }
            @media print {
              body { background: white; }
              main { max-width: none; min-height: auto; }
            }
          </style>
        </head>
        <body>
          <main>${resume.outerHTML}</main>
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

  const goToPreviousSection = () => {
    const previous = cvSections[Math.max(activeSectionIndex - 1, 0)]
    setActiveSection(previous.id)
  }

  const goToNextSection = () => {
    const next = cvSections[Math.min(activeSectionIndex + 1, cvSections.length - 1)]
    setActiveSection(next.id)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'data-diri':
        return (
          <section className="grid gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-[#07182c]">Data Diri</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Isi identitas utama dan ringkasan profil kandidat.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nama Lengkap" value={form.fullName} onChange={updateField('fullName')} helper="Isi nama lengkap sesuai dokumen profesional atau CV." placeholder="Contoh: Budi Santoso" />
              <Field label="Email" value={form.email} onChange={updateField('email')} helper="Gunakan email aktif yang terlihat profesional." placeholder="Contoh: nama@email.com" />
              <Field label="Telepon" value={form.phone} onChange={updateField('phone')} helper="Isi nomor yang bisa dihubungi recruiter atau HR." placeholder="Contoh: +62 812-3456-7890" />
              <Field label="Lokasi" value={form.location} onChange={updateField('location')} helper="Isi kota atau domisili saat ini." placeholder="Contoh: Jakarta, Indonesia" />
              <Field label="Tempat, Tanggal Lahir" value={form.birthPlaceDate} onChange={updateField('birthPlaceDate')} helper="Opsional, cantumkan bila relevan." placeholder="Contoh: Bandung, 12 Januari 1995" />
              <Field label="Target Posisi" value={form.targetRole} onChange={updateField('targetRole')} helper="Isi posisi yang sedang dilamar agar CV lebih fokus." placeholder="Contoh: HR Manager" />
            </div>
            <Field label="Ringkasan Profil" value={form.summary} onChange={updateField('summary')} helper="Tulis 2-4 kalimat singkat tentang pengalaman, kekuatan utama, dan arah karier." placeholder="Contoh: Profesional HR dengan pengalaman dalam rekrutmen, pengembangan organisasi, dan HRIS." multiline />
          </section>
        )
      case 'pengalaman':
        return (
          <section className="grid gap-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-extrabold text-[#07182c]">Pengalaman Kerja</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Tambahkan pengalaman yang paling relevan dengan target posisi.</p>
              </div>
              <button type="button" onClick={addWorkExperience} className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#d99a22] bg-white px-3 py-2 text-xs font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white">
                <Plus className="h-4 w-4" />
                Tambah
              </button>
            </div>
            {form.workExperiences.map((experience, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-[#fbfaf7] p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-600">Pengalaman Kerja {index + 1}</p>
                  <button type="button" onClick={() => removeWorkExperience(index)} className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                    <Trash2 className="h-3.5 w-3.5" />
                    Hapus
                  </button>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nama Jabatan" value={experience.jobTitle} onChange={updateWorkExperience(index, 'jobTitle')} helper="Isi nama jabatan terakhir atau jabatan yang pernah dipegang." placeholder="Contoh: HR Supervisor" />
                    <Field label="Nama Perusahaan" value={experience.company} onChange={updateWorkExperience(index, 'company')} helper="Isi nama perusahaan tempat pengalaman kerja tersebut." placeholder="Contoh: PT ABC Indonesia" />
                    <Field label="Awal Bekerja" value={experience.startDate} onChange={updateWorkExperience(index, 'startDate')} helper="Isi bulan dan tahun mulai bekerja." placeholder="Contoh: Jan 2021" />
                    <Field label="Akhir Bekerja" value={experience.endDate} onChange={updateWorkExperience(index, 'endDate')} helper="Isi bulan dan tahun selesai, atau tulis Sekarang jika masih bekerja." placeholder="Contoh: Sekarang" />
                  </div>
                  <Field label="Job Description" value={experience.description} onChange={updateWorkExperience(index, 'description')} helper="Tuliskan tanggung jawab, pencapaian, dan kontribusi utama secara ringkas." placeholder="Tuliskan tanggung jawab, pencapaian, dan kontribusi utama." multiline />
                </div>
              </div>
            ))}
          </section>
        )
      case 'pendidikan':
        return (
          <section className="grid gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-[#07182c]">Pendidikan</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Isi pendidikan terakhir agar format CV lebih rapi.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Nama Sekolah Terakhir" value={form.education.schoolName} onChange={updateEducation('schoolName')} helper="Isi nama sekolah, kampus, atau institusi pendidikan terakhir." placeholder="Contoh: Universitas Indonesia" />
              <Field label="Jurusan" value={form.education.major} onChange={updateEducation('major')} helper="Isi jurusan atau bidang pendidikan." placeholder="Contoh: Manajemen SDM" />
              <Field label="Tahun Lulus" value={form.education.graduationYear} onChange={updateEducation('graduationYear')} helper="Isi tahun kelulusan." placeholder="Contoh: 2020" />
            </div>
          </section>
        )
      case 'skills':
        return (
          <section className="grid gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-[#07182c]">Skills</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Masukkan skill yang relevan dengan posisi target dan job description.</p>
            </div>
            <Field label="Skills" value={form.skills} onChange={updateField('skills')} helper="Pisahkan skill dengan koma atau baris baru agar mudah dibaca ATS." placeholder="Contoh: Recruitment, HRIS, Performance Management" multiline />
          </section>
        )
      case 'sertifikasi':
        return (
          <section className="grid gap-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-extrabold text-[#07182c]">Sertifikasi</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Tambahkan sertifikasi relevan untuk memperkuat profil.</p>
              </div>
              <button type="button" onClick={addCertification} className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#d99a22] bg-white px-3 py-2 text-xs font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white">
                <Plus className="h-4 w-4" />
                Tambah
              </button>
            </div>
            {form.certifications.map((certification, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-[#fbfaf7] p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-600">Sertifikasi {index + 1}</p>
                  <button type="button" onClick={() => removeCertification(index)} className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                    <Trash2 className="h-3.5 w-3.5" />
                    Hapus
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label="Nama Sertifikasi" value={certification.name} onChange={updateCertification(index, 'name')} helper="Isi nama sertifikasi." placeholder="Contoh: Certified HR Manager" />
                  <Field label="Penerbit" value={certification.issuer} onChange={updateCertification(index, 'issuer')} helper="Isi lembaga penerbit." placeholder="Contoh: BNSP" />
                  <Field label="Tanggal Terbit" value={certification.issuedDate} onChange={updateCertification(index, 'issuedDate')} helper="Isi bulan dan tahun." placeholder="Contoh: Jan 2024" />
                </div>
              </div>
            ))}
          </section>
        )
      case 'job-description':
        return (
          <section className="grid gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-[#07182c]">Target Lowongan</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Tempel job description agar sistem menghitung kecocokan keyword.</p>
            </div>
            <Field label="Job Description" value={form.jobDescription} onChange={updateField('jobDescription')} helper="Tempel deskripsi lowongan atau kualifikasi posisi yang dituju." placeholder="Tempel job description atau kualifikasi posisi yang dituju." multiline />
          </section>
        )
      default:
        return null
    }
  }

  return (
    <ConsultingShell>
      <section className="bg-[#fbfaf7] px-5 pb-6 pt-24 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex max-w-3xl items-start gap-4">
            <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f7ead7] text-[#07182c]">
              <FileText className="h-7 w-7" />
            </div>
            <div>
            <Link href="/resources" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#c88916]">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Resources
            </Link>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-[#07182c] sm:text-4xl">
              CV ATS Generator
            </h1>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              Buat CV satu kolom yang rapi, mudah dibaca ATS, dan siap dicocokkan dengan lowongan.
            </p>
            </div>
          </div>

          <div className="mt-7 grid items-center gap-3 sm:grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto]">
            {['Data Diri', 'Pengalaman', 'Target Lowongan', 'Preview & Skor'].map((item, index) => (
              <div key={item} className="contents">
                <div className="flex items-center gap-3">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold ${index <= Math.min(activeSectionIndex, 3) ? 'bg-[#d99a22] text-white' : 'bg-slate-200 text-[#07182c]'}`}>
                    {index + 1}
                  </span>
                  <span className={`text-xs font-extrabold ${index <= Math.min(activeSectionIndex, 3) ? 'text-[#c88916]' : 'text-slate-500'}`}>{item}</span>
                </div>
                {index < 3 ? <div className="hidden h-px bg-slate-300 sm:block" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 pb-7 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 xl:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="content-start xl:sticky xl:top-24">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="bg-[#06172a] px-5 py-4 text-white">
                <h2 className="text-sm font-extrabold">Section CV</h2>
              </div>
              <nav className="grid gap-1 p-3">
                {cvSections.map((section, index) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center justify-between rounded-md px-3 py-3 text-left text-sm transition ${
                      activeSection === section.id
                        ? 'bg-[#fff8ec] font-bold text-[#c88916]'
                        : 'font-medium text-[#07182c] hover:bg-[#fff8ec] hover:text-[#c88916]'
                    }`}
                  >
                    <span>{section.label}</span>
                    <CheckCircle2 className={`h-4 w-4 ${sectionProgress[index] ? 'text-emerald-600' : 'text-slate-300'}`} />
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-4 rounded-lg border border-[#d99a22]/20 bg-[#fff8ec] p-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-[#d99a22]" />
                <h3 className="text-sm font-bold text-[#07182c]">Tips Cepat</h3>
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-700">
                Tempel job description agar sistem bisa menilai keyword yang cocok dan yang belum muncul di CV.
              </p>
            </div>
          </aside>

          <div className="grid gap-4">
          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#07182c]">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#07182c]">Data CV</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Lengkapi informasi {activeSectionMeta.label.toLowerCase()} dengan benar.
                  </p>
                </div>
              </div>
              <p className="rounded-full bg-[#fff8ec] px-3 py-1 text-xs font-bold text-[#c88916]">
                {activeSectionMeta.step}/{cvSections.length}
              </p>
            </div>

            <div className="mt-5 border-t border-slate-200 pt-5">
              {renderActiveSection()}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={goToPreviousSection}
                disabled={activeSectionIndex === 0}
                className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-[#d99a22] hover:text-[#c88916] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kembali
              </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={goToNextSection}
                  disabled={activeSectionIndex === cvSections.length - 1}
                  className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-[#d99a22] hover:text-[#c88916] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Lanjut
                </button>
                <button
                  type="button"
                  onClick={handleGenerateDraft}
                  className="inline-flex items-center gap-2 rounded-md bg-[#d99a22] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#eba92e]"
                >
                  Generate Draft CV
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>

            <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#07182c]" />
                  <h2 className="text-sm font-extrabold text-[#07182c]">Preview CV ATS</h2>
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-[#07182c] transition hover:border-[#d99a22] hover:text-[#c88916]"
                >
                  Lihat Penuh
                  <Download className="h-4 w-4" />
                </button>
              </div>

              <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
                <div className="max-h-[650px] overflow-auto rounded-lg border border-slate-200 bg-[#f1eee6] p-3 sm:p-4">
                  <PrintResume form={form} matchedKeywords={matchedKeywords} />
                </div>

                <div className="grid content-start gap-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">ATS Score</p>
                        <div className="mt-2 flex items-end gap-2">
                          <span className="text-5xl font-extrabold text-[#d99a22]">{atsScore}</span>
                          <span className="mb-2 text-xl font-bold text-[#d99a22]">%</span>
                        </div>
                        <p className="mt-1 text-xs font-bold text-emerald-600">{atsScore >= 70 ? 'Good Match' : 'Needs Improvement'}</p>
                      </div>
                      <div className="min-w-32 flex-1">
                        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                          <div className="h-full rounded-full bg-[#d99a22]" style={{ width: `${atsScore}%` }} />
                        </div>
                        <p className="mt-2 text-right text-xs font-semibold text-slate-500">{matchedKeywords.length} / {keywords.length || 0}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-bold">Missing Keywords</h3>
                      <span className="text-xs text-slate-500">{missingKeywords.length ? 'Perlu ditinjau' : 'Sudah baik'}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(missingKeywords.length ? missingKeywords : ['Keyword utama sudah terwakili']).map((keyword) => (
                        <span key={keyword} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 pb-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-3 rounded-lg bg-[#fff8ec] px-5 py-4 text-sm leading-6 text-slate-700">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#d99a22]" />
          <p>Gunakan job description untuk membantu sistem menilai kecocokan keyword.</p>
        </div>
      </section>

      <section className="bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-slate-200 p-6 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Butuh CV yang lebih personal?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              YM-ID dapat membantu menyusun profil profesional, career story, dan dokumen pendukung sesuai target karier atau kebutuhan organisasi.
            </p>
          </div>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-md border border-[#d99a22] px-5 py-2.5 text-xs font-bold text-[#c88916] md:mt-0">
            Konsultasikan CV
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <ConsultationCta title="Ingin Membuat Resource Digital untuk Organisasi Anda?" description="YM-ID membantu mengembangkan website, tools, dan workflow sederhana yang mendukung proses bisnis dan people development." button="DISKUSIKAN SOLUSI DIGITAL" />
    </ConsultingShell>
  )
}
