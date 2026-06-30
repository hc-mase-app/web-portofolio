import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Lightbulb, Target, TrendingUp } from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { ConsultationCta, PrimaryLink, SectionHeading, SecondaryLink } from './shared'
import { Strategy3DScene } from './three-d-visuals'
import { services, siteData } from '@/lib/site-data'
import {workSteps} from '@/lib/site-data'

export default function ConsultingHomePage() {
  const heroMetrics = [
    ['10+', 'Years Experience'],
    ['250+', 'Projects & Programs'],
    ['15+', 'Industries Served'],
  ] as const

  const serviceSummaries = {
    'business-organization':
      'Pendampingan untuk menata struktur, proses bisnis, SOP, alur kerja, dan sistem pengelolaan organisasi.',
    'leadership-people':
      'Program leadership, coaching and counseling, komunikasi, team development, dan performance management.',
    'recruitment-talent':
      'Dukungan executive search, recruitment support, talent mapping, assessment, dan proses akuisisi kandidat.',
    'website-digital':
      'Website company profile, portfolio, landing page, maintenance, digital form, dan workflow sederhana.',
  } as const

  return (
    <ConsultingShell>
      <section className="relative isolate overflow-hidden bg-[#06172a] px-5 pt-24 text-white lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_34%,rgba(11,53,84,0.98),transparent_43%),radial-gradient(circle_at_22%_74%,rgba(217,154,34,0.13),transparent_34%),linear-gradient(135deg,#030f21_0%,#06172a_42%,#0b3554_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(3,11,22,0.98)_0%,rgba(6,23,42,0.86)_42%,rgba(6,23,42,0.35)_100%)]" />
        <div className="absolute left-1/2 top-24 -z-10 h-[520px] w-[520px] rounded-full bg-[#d99a22]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#06172a] via-[#06172a]/70 to-transparent" />

        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 py-14 lg:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d99a22]/60 bg-[#d99a22]/10 px-5 py-2 text-xs font-bold text-[#e1a126] shadow-[0_0_24px_rgba(217,154,34,0.18)]">
              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
              Business, People & Digital Solutions
            </span>
            <h1 className="mt-7 text-3xl font-bold leading-tight drop-shadow-[0_3px_16px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[3.2rem]">
              Transformasi bisnis dimulai dari strategi, manusia, dan sistem yang tepat.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 text-justify">
              YM-ID membantu bisnis dan organisasi menata fondasi, mengembangkan pemimpin dan tim,
              menemukan talenta yang tepat, serta membangun solusi digital yang mendukung pertumbuhan.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <PrimaryLink href="/services">EXPLORE SERVICES</PrimaryLink>
              <a href={siteData.whatsapp} target="_blank" rel="noreferrer" className="rounded-md border-2 border-[#d99a22] px-6 py-2.5 text-sm font-bold text-[#e1a126] transition hover:bg-[#d99a22] hover:text-white">
                GET IN TOUCH
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 rounded-lg border border-white/15 bg-white/[0.04] p-4 backdrop-blur-sm">
              {heroMetrics.map(([value, label]) => (
                <div key={label} className="border-r border-white/15 pr-3 last:border-r-0">
                  <p className="text-2xl font-extrabold text-[#e1a126]">{value}</p>
                  <p className="mt-1 text-[11px] font-semibold leading-4 text-white/72">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <Strategy3DScene />
        </div>

        <div className="mx-auto max-w-7xl pb-12">
          <div className="grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
            {[
              [Target, 'Strategic Impact', 'Solusi dimulai dari prioritas bisnis yang paling penting.'],
              [TrendingUp, 'Measurable Growth', 'Setiap pekerjaan diarahkan pada hasil yang bisa ditindaklanjuti.'],
              [Lightbulb, 'Practical Execution', 'Rekomendasi dibuat agar mudah dipahami dan dijalankan tim.'],
            ].map(([Icon, title, description], index) => {
              const ItemIcon = Icon as typeof Target
              return (
                <div key={String(title)} className={`flex min-h-16 items-start gap-4 ${index ? 'sm:border-l sm:border-white/20 sm:pl-7' : ''}`}>
                  <ItemIcon className="mt-1 h-7 w-7 shrink-0 text-[#e1a126]" />
                  <div>
                    <p className="text-sm font-bold text-white">{String(title)}</p>
                    <p className="mt-1 text-xs leading-5 text-white/65">{String(description)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#07182c]">Bagaimana Kami Membantu Anda</h2>
            <span className="mx-auto mt-3 block h-0.5 w-12 bg-[#d99a22]" />
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Pilih layanan sesuai tantangan utama Anda. Setiap layanan dapat berdiri sendiri atau
              dikombinasikan menjadi program transformasi yang lebih lengkap.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              const short = serviceSummaries[service.slug as keyof typeof serviceSummaries] || service.description
              return (
                <article key={service.slug} className="group flex min-h-[360px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#d99a22] hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)]">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#061f36] text-[#d99a22] shadow-[0_14px_30px_rgba(6,23,42,0.14)]"><Icon className="h-8 w-8" /></div>
                  <h3 className="mt-6 text-xl font-bold leading-7 text-[#07182c]">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-700">{short}</p>
                  <Link href={`/services#${service.slug}`} className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-[#d99a22] px-5 py-2.5 text-xs font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white">
                    PELAJARI LAYANAN <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#06172a] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e1a126]">Why YM-ID</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">Satu partner untuk strategi, people, dan sistem digital.</h2>
            <p className="mt-5 text-sm leading-7 text-white/70 text-justify">
              Banyak organisasi tidak hanya membutuhkan ide, tetapi juga struktur, eksekusi, dan alat kerja yang bisa dipakai. YM-ID menghubungkan tiga hal itu agar perubahan lebih mudah dijalankan.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [Target, 'Diagnose', 'Memahami kondisi dan prioritas utama sebelum menentukan solusi.'],
              [Check, 'Design', 'Menyusun langkah kerja, materi, tools, dan sistem yang relevan.'],
              [TrendingUp, 'Deliver', 'Mendampingi implementasi agar hasilnya terukur dan berkelanjutan.'],
            ].map(([Icon, title, description]) => {
              const ItemIcon = Icon as typeof Target
              return (
                <article key={String(title)} className="rounded-lg border border-white/15 bg-white/[0.04] p-5">
                  <ItemIcon className="h-9 w-9 text-[#e1a126]" />
                  <h3 className="mt-4 font-bold">{String(title)}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/65">{String(description)}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Tentang Konsultan</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 text-justify">
              Dipimpin oleh praktisi dan konsultan berpengalaman dalam pengembangan
              organisasi, pengelolaan SDM, leadership training, coaching and counseling, serta
              digitalisasi proses kerja.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-700 text-justify">
              Kami membantu bisnis pemula dan organisasi berkembang membangun fondasi yang lebih
              tertata, kompeten, dan siap bertumbuh. 
              Kami percaya bahwa setiap Pelaku Bisnis atau Personal memiliki tantangan yang berbeda. Karena itu, 
              setiap pendekatan dirancang berdasarkan kondisi nyata, tujuan bisnis, 
              dan tahap pertumbuhan organisasi agar memberikan dampak yang berkelanjutan.
            </p>
            <div className="mt-7"><SecondaryLink href="/about">KENALI KAMI</SecondaryLink></div>
          </div>
          <div className="relative aspect-[41/30] overflow-hidden rounded-lg border border-slate-200 shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
            <Image src="/consulting/yan-professional-speaking.png" alt="Yan Firdaus saat memimpin pertemuan profesional" fill className="object-cover object-center" />
          </div>
        </div>
      </section>


      <section className="bg-[#f1f3f5] px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Cara Kami Bekerja" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#061f36] text-white"><Icon className="h-7 w-7" /></div>
                  <div><p className="text-2xl font-bold text-[#d99a22]">{step.number}</p><h3 className="font-bold">{step.title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{step.description}</p></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      <ConsultationCta title="Mari Diskusikan Kebutuhan Bisnis dan Organisasi Anda" description="Mulai dari tantangan yang paling penting, lalu tentukan langkah yang paling tepat." />
    </ConsultingShell>
  )
}
