import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Calculator, Check, Laptop, Lightbulb, Target, TrendingUp } from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { ConsultationCta, HeroSceneImage, PrimaryLink, SectionHeading, SecondaryLink } from './shared'
import { services, siteData } from '@/lib/site-data'

export default function ConsultingHomePage() {
  const heroHighlights = [
    [Target, 'Pendekatan Praktis & Terukur'],
    [TrendingUp, 'Berpengalaman di Berbagai Industri'],
    [Lightbulb, 'Fokus pada Hasil dan Pertumbuhan'],
  ] as const

  return (
    <ConsultingShell>
      <section className="relative isolate overflow-hidden bg-[#06172a] px-5 pt-24 text-white lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_38%,rgba(11,53,84,0.95),transparent_42%),linear-gradient(135deg,#06172a_0%,#07182c_48%,#0b3554_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(6,23,42,0.98)_0%,rgba(6,23,42,0.82)_42%,rgba(6,23,42,0.42)_100%)]" />
        <div className="absolute left-1/2 top-28 -z-10 h-96 w-96 rounded-full bg-[#d99a22]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#06172a] via-[#06172a]/70 to-transparent" />

        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 py-14 lg:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#d99a22]/60 bg-[#d99a22]/10 px-5 py-2 text-xs font-bold text-[#e1a126]">
              3D Interactive Strategy Layer
            </span>
            <h1 className="mt-7 text-5xl font-bold leading-tight drop-shadow-[0_3px_16px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-[4.75rem]">
              Business, People & Digital Solutions
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/82">
              Kami menggabungkan strategi bisnis, human capital intelligence, dan sistem digital untuk membantu organisasi tumbuh lebih terarah, produktif, dan berkelanjutan.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <PrimaryLink href="/services">EXPLORE SERVICES</PrimaryLink>
              <a href="/about" className="rounded-md border-2 border-[#d99a22] px-6 py-2.5 text-sm font-bold text-[#e1a126] hover:bg-[#d99a22] hover:text-white">
                ABOUT YM-ID
              </a>
            </div>
          </div>
          <div className="hidden justify-center lg:flex">
            <HeroSceneImage
              src="/consulting/hero-home-concept.png"
              alt="Konsep visual 3D halaman Home YM-ID"
              width={1070}
              height={820}
              className="w-full max-w-[820px]"
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl pb-12">
          <div className="grid max-w-4xl gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
            {heroHighlights.map(([Icon, label], index) => (
              <div key={label} className={`flex min-h-14 items-center gap-4 ${index ? 'sm:border-l sm:border-white/20 sm:pl-7' : ''}`}>
                <Icon className="h-8 w-8 shrink-0 text-[#e1a126]" />
                <p className="text-sm font-medium leading-5 text-white/88">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Bagaimana Kami Membantu Anda" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              const short = service.slug === 'business-organization'
                ? 'Pendampingan untuk menata proses bisnis, organisasi, sistem kerja, dan pengelolaan tim.'
                : service.slug === 'leadership-people'
                  ? 'Training leadership, coaching and counseling, komunikasi, serta pengembangan kemampuan tim.'
                  : 'Website company profile, portfolio, landing page, dan solusi digital sesuai kebutuhan bisnis.'
              return (
                <article key={service.slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#061f36] text-[#d99a22]"><Icon className="h-8 w-8" /></div>
                    <h3 className="text-lg font-bold leading-6 text-[#07182c]">{service.title}</h3>
                  </div>
                  <p className="mt-7 min-h-24 text-sm leading-7 text-slate-700">{short}</p>
                  <Link href={`/services#${service.slug}`} className="mt-3 inline-flex rounded-md border border-[#d99a22] px-5 py-2.5 text-xs font-bold text-[#c88916] hover:bg-[#d99a22] hover:text-white">
                    PELAJARI LAYANAN
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_50%_20%,#0b3554_0%,#06172a_72%)] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Pendekatan yang Praktis dan Relevan" dark />
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              [Target, 'Sesuai Kebutuhan Bisnis', 'Setiap solusi dirancang berdasarkan tantangan dan tujuan bisnis Anda.'],
              [Check, 'Mudah Diterapkan', 'Langkah-langkah praktis yang bisa dijalankan oleh tim Anda.'],
              [TrendingUp, 'Dapat Dikembangkan', 'Solusi yang fleksibel dan siap beradaptasi seiring pertumbuhan bisnis.'],
            ].map(([Icon, title, description], index) => {
              const ItemIcon = Icon as typeof Target
              return (
                <div key={String(title)} className={`text-center ${index ? 'md:border-l md:border-white/25' : ''}`}>
                  <ItemIcon className="mx-auto h-12 w-12 text-[#d99a22]" />
                  <h3 className="mt-5 font-bold">{String(title)}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/70">{String(description)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Tentang Konsultan</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Dipimpin oleh Yan Firdaus, praktisi dan konsultan berpengalaman dalam pengembangan
              organisasi, pengelolaan SDM, leadership training, coaching and counseling, serta
              digitalisasi proses kerja.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Kami membantu bisnis pemula dan organisasi berkembang membangun fondasi yang lebih
              tertata, kompeten, dan siap bertumbuh.
            </p>
            <div className="mt-7"><SecondaryLink href="/about">KENALI KAMI</SecondaryLink></div>
          </div>
          <div className="relative aspect-[41/30] overflow-hidden">
            <Image src="/consulting/yan-professional-speaking.png" alt="Yan Firdaus saat memimpin pertemuan profesional" fill className="object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_50%_20%,#0b3554_0%,#06172a_72%)] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Sumber Daya Praktis" dark />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              [Calculator, 'Salary & Tax Calculator', 'Hitung estimasi PPh 21 dan gaji bersih bulanan dengan cepat.', siteData.taxCalculator, 'Gunakan Sekarang'],
              [BookOpen, 'KAMUS HR', 'Temukan definisi istilah HR yang sering digunakan dalam bisnis.', '/resources/kamus-hr', 'Jelajahi Sekarang'],
              [Lightbulb, 'Business & HR Insights', 'Artikel dan tips praktis untuk membantu pengambilan keputusan.', '/resources', 'Baca Sekarang'],
            ].map(([Icon, title, description, href, action]) => {
              const ItemIcon = Icon as typeof Laptop
              const external = String(href).startsWith('http')
              return (
                <article key={String(title)} className="flex gap-5 rounded-lg border border-white/20 bg-white/[0.03] p-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#d99a22] text-[#d99a22]"><ItemIcon className="h-7 w-7" /></div>
                  <div>
                    <h3 className="font-bold">{String(title)}</h3>
                    <p className="mt-2 text-xs leading-5 text-white/70">{String(description)}</p>
                    {external ? (
                      <a href={String(href)} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#e1a126]">{String(action)} <ArrowRight className="h-4 w-4" /></a>
                    ) : (
                      <Link href={String(href)} className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#e1a126]">{String(action)} <ArrowRight className="h-4 w-4" /></Link>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <ConsultationCta title="Mari Diskusikan Kebutuhan Bisnis dan Organisasi Anda" description="Mulai dari tantangan yang paling penting, lalu tentukan langkah yang paling tepat." />
    </ConsultingShell>
  )
}
