import { Check, ClipboardList, FileText, Laptop, Network, Search, UserRound, Users } from 'lucide-react'
import Link from 'next/link'
import { ConsultingShell } from './site-shell'
import { ConsultationCta, HeroSceneImage, PageHero, PrimaryLink, SectionHeading, SecondaryLink } from './shared'
import { ServicesPillars3D } from './three-d-visuals'
import { services } from '@/lib/site-data'

const process = [
  [Users, '01', 'Initial Discussion', 'Mendiskusikan kebutuhan dan tantangan.'],
  [Search, '02', 'Needs Assessment', 'Memahami kondisi, ruang lingkup, dan prioritas.'],
  [FileText, '03', 'Solution Proposal', 'Menyusun metode, waktu, dan biaya.'],
  [Check, '04', 'Implementation', 'Menjalankan pekerjaan dan mengevaluasi hasil.'],
]

export default function ConsultingServicesPage() {
  return (
    <ConsultingShell>
      <PageHero
        label="SERVICES"
        title="Solusi yang Dirancang Sesuai Kebutuhan Anda"
        description="Kami menyediakan layanan konsultasi, pengembangan manusia, dan solusi digital untuk membantu bisnis pemula serta organisasi berkembang membangun fondasi yang lebih tertata dan siap bertumbuh."
        actions={
          <>
            <PrimaryLink href="/contact">Discuss Your Needs</PrimaryLink>
            <SecondaryLink href="/resources">See Practical Resources</SecondaryLink>
          </>
        }
        visual={
          <HeroSceneImage
            src="/consulting/hero-services-concept.png"
            alt="Konsep visual 3D halaman Services YM-ID"
            width={1125}
            height={760}
            className="w-full max-w-[760px]"
          />
        }
      />

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Layanan Kami" />
          <div className="mt-10">
            <ServicesPillars3D />
          </div>
          <div className="mt-10 space-y-5">
            {services.map((service, index) => {
              const Icon = service.icon
              const itemColumns = 'itemColumns' in service ? service.itemColumns : null
              const ctaLabel = ('ctaLabel' in service && service.ctaLabel) || 'DISKUSIKAN LAYANAN'
              const ctaHref = ('ctaHref' in service && service.ctaHref) || 'https://wa.me/62817393994'
              const ctaClassName =
                'rounded-md border border-[#d99a22] px-6 py-2.5 text-xs font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white'

              return (
                <article id={service.slug} key={service.slug} className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.08)] lg:p-8">
                  <div className="grid gap-8 lg:grid-cols-[0.34fr_1fr]">
                    <div className="flex min-h-52 items-center justify-center border-b border-slate-200 lg:border-b-0 lg:border-r">
                      <Icon className="h-32 w-32 stroke-[1.2] text-[#07182c]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{index + 1}. {service.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-700">{service.description}</p>
                      <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {itemColumns
                          ? itemColumns.map((column) => (
                              <div key={column.join('-')} className="grid gap-3">
                                {column.map((item) => (
                                  <div key={item} className="flex items-start gap-3 text-sm">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d99a22]" />
                                    {item}
                                  </div>
                                ))}
                              </div>
                            ))
                          : service.items.map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d99a22]" />
                                {item}
                              </div>
                            ))}
                      </div>
                      <div className="mt-7 flex justify-end">
                        {ctaHref.startsWith('/') ? (
                          <Link href={ctaHref} className={`${ctaClassName} bg-[#d99a22] text-white hover:bg-[#eba92e]`}>
                            {ctaLabel}
                          </Link>
                        ) : (
                          <a href={ctaHref} target="_blank" rel="noreferrer" className={ctaClassName}>
                            {ctaLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_50%_20%,#0b3554_0%,#06172a_72%)] px-5 py-9 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Cara Memulai" dark />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([Icon, number, title, description], index) => {
              const StepIcon = Icon as typeof Users
              return (
                <div key={String(number)} className={`flex gap-4 ${index ? 'lg:border-l lg:border-white/25 lg:pl-6' : ''}`}>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#d99a22] text-[#d99a22]"><StepIcon className="h-6 w-6" /></div>
                  <div><p className="font-bold text-[#d99a22]">{String(number)}</p><h3 className="mt-1 text-sm font-bold">{String(title)}</h3><p className="mt-2 text-xs leading-5 text-white/70">{String(description)}</p></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#07182c]"><ClipboardList className="h-16 w-16 text-[#07182c]" /></div>
          <div className="flex-1"><h2 className="text-2xl font-bold">Belum Menemukan Layanan yang Sesuai?</h2><p className="mt-3 text-sm leading-7 text-slate-700">Setiap bisnis dan organisasi memiliki kebutuhan yang berbeda. Layanan dapat disesuaikan berdasarkan tantangan, prioritas, dan kemampuan organisasi Anda.</p></div>
          <a href="https://wa.me/62817393994" target="_blank" rel="noreferrer" className="shrink-0 rounded-md border border-[#d99a22] px-6 py-3 text-xs font-bold text-[#c88916]">CERITAKAN KEBUTUHAN ANDA</a>
        </div>
      </section>

      <ConsultationCta />
    </ConsultingShell>
  )
}
