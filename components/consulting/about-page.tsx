import Image from 'next/image'
import { Code2, Lightbulb, Target, Users } from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { ConsultationCta, PageHero, PrimaryLink, SectionHeading } from './shared'
import { AboutIdentity3D } from './three-d-visuals'
import { principles, siteData, workSteps } from '@/lib/site-data'

export default function ConsultingAboutPage() {
  return (
    <ConsultingShell>
      <PageHero
        label="ABOUT"
        title="About YM-ID"
        description="Kami hadir sebagai partner konsultasi bisnis, people development, dan solusi digital untuk membantu organisasi membangun fondasi yang lebih tertata dan siap bertumbuh."
        visual={<AboutIdentity3D />}
      />

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Tentang Kami</h2>
            <p className="mt-6 text-sm leading-8 text-slate-700">
              Layanan konsultasi ini dibangun dari pengalaman dalam mengelola organisasi,
              mengembangkan sumber daya manusia, meningkatkan kemampuan kepemimpinan, serta
              menciptakan solusi digital yang mendukung proses kerja.
            </p>
            <p className="mt-5 text-sm leading-8 text-slate-700">
              Kami percaya bahwa setiap bisnis memiliki kebutuhan yang berbeda. Karena itu,
              setiap solusi dirancang secara praktis, bertahap, dan disesuaikan dengan kondisi nyata organisasi.
            </p>
          </div>
          <div className="relative mx-auto flex h-72 w-full max-w-lg items-end justify-center overflow-hidden rounded-3xl bg-[radial-gradient(circle,#f1ede6_0%,#fff_65%)]">
            <div className="absolute bottom-10 h-20 w-4/5 rounded-[50%] bg-slate-200/80 blur-xl" />
            <div className="relative flex items-end gap-5 pb-10">
              {[Target, Users, Code2].map((Icon, index) => (
                <div key={index} className={`flex h-28 w-28 items-center justify-center rounded-full shadow-xl ${index === 1 ? 'mb-5 bg-[#d99a22] text-white' : 'bg-[#061f36] text-white'}`}>
                  <Icon className="h-12 w-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_50%_20%,#0b3554_0%,#06172a_72%)] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Prinsip Kami" dark />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.title === 'Practical' ? Lightbulb : principle.icon
              return (
                <article key={principle.title} className="flex items-center gap-5 rounded-lg border border-[#d99a22]/60 p-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d99a22] text-[#d99a22]"><Icon className="h-8 w-8" /></div>
                  <div><h3 className="text-xl font-bold">{principle.title}</h3><p className="mt-2 text-sm leading-6 text-white/75">{principle.description}</p></div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-square overflow-hidden bg-[#06172a]">
            <Image src="/consulting/yan-firdaus-professional-navy.jpg" alt="Yan Firdaus, Lead Consultant" fill className="object-cover object-top" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Lead Consultant</h2>
            <span className="mt-2 block h-0.5 w-10 bg-[#d99a22]" />
            <h3 className="mt-5 text-4xl font-bold">Yan Firdaus</h3>
            <p className="mt-2 font-semibold text-[#c88916]">Business, People & Digital Solutions Consultant</p>
            <p className="mt-6 text-sm leading-8 text-slate-700">
              Praktisi dan konsultan berpengalaman dalam pengembangan organisasi, pengelolaan
              Human Capital dan HCGA, leadership training, coaching and counseling, serta digitalisasi proses kerja.
            </p>
            <p className="mt-5 text-sm font-bold leading-7">Organization Development <span className="text-[#d99a22]">&bull;</span> Leadership Development <span className="text-[#d99a22]">&bull;</span> Human Capital <span className="text-[#d99a22]">&bull;</span> Digital Solutions</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <PrimaryLink href="/yanfirdaus" external>PORTFOLIO</PrimaryLink>
              <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-[#d99a22] px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-[#eba92e]">LINKEDIN</a>
            </div>
            <p className="mt-3 text-sm text-[#c88916]">ym-id.com/yanfirdaus</p>
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

      <ConsultationCta title="Mari Membangun Solusi yang Sesuai dengan Kebutuhan Anda" description="Ceritakan kebutuhan bisnis atau organisasi Anda dan tentukan langkah awal yang paling tepat bersama kami." />
    </ConsultingShell>
  )
}
