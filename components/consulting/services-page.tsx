import { Check, ClipboardList, FileText, Search, Users } from 'lucide-react'
import Link from 'next/link'
import { ConsultingShell } from './site-shell'
import { ConsultationCta, PageHero, SectionHeading } from './shared'
import { ServicesHero3D, ServicesPillars3D} from './three-d-visuals'
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
        visual={<ServicesHero3D />}
      />
      

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Layanan Kami" />
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


      <ConsultationCta />
    </ConsultingShell>
  )
}
