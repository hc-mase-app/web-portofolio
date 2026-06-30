import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { siteData } from '@/lib/site-data'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-bold uppercase tracking-wide text-[#e1a126]">{children}</p>
}

export function PageHero({
  label,
  title,
  description,
  visual,
  actions,
}: {
  label: string
  title: string
  description: string
  visual?: React.ReactNode
  actions?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_70%_28%,rgba(11,53,84,0.98)_0%,rgba(6,34,58,0.98)_36%,#06172a_78%)] px-5 pb-16 pt-28 text-white lg:px-8 lg:pb-20 lg:pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,22,0.96)_0%,rgba(6,23,42,0.9)_40%,rgba(6,23,42,0.35)_100%)]" />
      <div className="absolute left-[58%] top-20 h-[520px] w-[520px] rounded-full bg-[#d99a22]/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#06172a] via-[#06172a]/70 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d99a22]/55 bg-black/15 px-5 py-2 text-xs font-bold tracking-[0.18em] text-[#f1bc4f] shadow-[0_0_24px_rgba(217,154,34,0.14)]">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
            {label}
          </span>
          <h1 className="mt-10 max-w-3x1 text-3xl font-bold leading-[1.04] sm:text-4xl lg:text-[3.8rem]">{title}</h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-white/80 text-justify">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        {visual && <div className="hidden justify-center lg:flex">{visual}</div>}
      </div>
    </section>
  )
}

export function HeroSceneImage({
  src,
  alt,
  width,
  height,
  className = '',
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(217,154,34,0.16),transparent_65%)] blur-3xl" />
      <div className="absolute inset-[8%] rounded-[2rem] border border-white/12 bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm" />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative z-10 h-auto w-full object-contain drop-shadow-[0_32px_60px_rgba(0,0,0,0.48)] [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_82%)]"
      />
    </div>
  )
}

export function SectionHeading({ title, description, dark = false }: { title: string; description?: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className={`text-3xl font-bold ${dark ? 'text-white' : 'text-[#07182c]'}`}>{title}</h2>
      <span className="mx-auto mt-3 block h-0.5 w-12 bg-[#d99a22]" />
      {description && <p className={`mt-4 leading-7 ${dark ? 'text-white/70' : 'text-slate-600'}`}>{description}</p>}
    </div>
  )
}

export function PrimaryLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const className = 'inline-flex items-center justify-center gap-2 rounded-md bg-[#d99a22] px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-[#eba92e]'
  if (external) return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>
  return <Link href={href} className={className}>{children}</Link>
}

export function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#d99a22] px-6 py-2.5 text-sm font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white">{children}</Link>
}

export function ConsultationCta({ title = 'Mari Mulai dari Kebutuhan yang Paling Penting', description = 'Diskusikan kondisi bisnis atau organisasi Anda dan tentukan solusi yang tepat secara bertahap.', button = 'KONSULTASI MELALUI WHATSAPP' }: { title?: string; description?: string; button?: string }) {
  return (
    <section className="bg-[#06172a] px-5 pt-8 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-lg border border-white/20 px-6 py-7 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#d99a22] text-[#d99a22] sm:flex"><MessageCircle className="h-8 w-8" /></div>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">{description}</p>
          </div>
        </div>
        <a href={siteData.whatsapp} target="_blank" rel="noreferrer" className="shrink-0 rounded-md bg-[#d99a22] px-7 py-4 text-center text-sm font-bold text-white hover:bg-[#eba92e]">{button}</a>
      </div>
    </section>
  )
}
