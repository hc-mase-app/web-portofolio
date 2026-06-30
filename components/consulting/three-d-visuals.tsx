'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  FileCheck2,
  Layers3,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Search,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: 'reverse' as const,
  ease: 'easeInOut' as const,
}

function GlowRing({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full border border-[#d99a22]/50 shadow-[0_0_42px_rgba(217,154,34,0.34)] ${className}`}
    />
  )
}

function GlassPanel({
  className = '',
  title,
  children,
}: {
  className?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={floatTransition}
      className={`absolute rounded-lg border border-white/20 bg-white/[0.08] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl ${className}`}
    >
      <p className="text-xs font-bold text-white/80">{title}</p>
      {children}
    </motion.div>
  )
}

export function Strategy3DScene() {
  return (
    <div className="relative mx-auto hidden h-[560px] w-full max-w-[720px] items-center justify-center lg:flex">
      <div className="absolute inset-0 rounded-[999px] bg-[radial-gradient(circle,rgba(217,154,34,0.18),transparent_62%)] blur-2xl" />
      <GlowRing className="left-[12%] top-[33%] h-56 w-[76%] rotate-[-12deg]" />
      <GlowRing className="left-[20%] top-[39%] h-40 w-[60%] rotate-[13deg]" />
      <GlowRing className="left-[28%] top-[44%] h-28 w-[44%] rotate-[-4deg]" />

      <GlassPanel className="left-0 top-16 w-64" title="HR Analytics">
        <div className="mt-4 flex h-20 items-end gap-2">
          {[28, 48, 38, 62, 54, 78, 88].map((height, index) => (
            <span
              key={index}
              className="w-full rounded-t bg-[#d99a22]"
              style={{ height }}
            />
          ))}
        </div>
      </GlassPanel>

      <GlassPanel className="right-0 top-24 w-52" title="Performance">
        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-[8px] border-[#d99a22] text-lg font-extrabold text-white">
            76%
          </div>
          <div className="grid flex-1 gap-2">
            <span className="h-2 rounded bg-white/45" />
            <span className="h-2 w-4/5 rounded bg-[#d99a22]" />
            <span className="h-2 w-3/5 rounded bg-white/25" />
          </div>
        </div>
      </GlassPanel>

      <motion.div
        animate={{ y: [0, -14, 0], rotateY: [0, 8, 0] }}
        transition={{ ...floatTransition, duration: 6 }}
        className="relative z-10 h-72 w-72"
        style={{ perspective: '900px' }}
      >
        <div className="absolute left-10 top-0 h-32 w-32 rounded-2xl border border-white/30 bg-[#0b3554]/80 p-5 text-white shadow-[0_28px_60px_rgba(0,0,0,0.42),inset_0_0_30px_rgba(255,255,255,0.12)] [transform:rotateX(58deg)_rotateZ(-45deg)]" />
        <div className="absolute left-4 top-20 h-36 w-36 rounded-2xl border border-[#d99a22]/70 bg-[#09233c]/95 p-5 text-white shadow-[0_30px_70px_rgba(0,0,0,0.42),inset_0_0_32px_rgba(217,154,34,0.2)]">
          <BarChart3 className="h-10 w-10 text-[#d99a22]" />
          <p className="mt-5 text-lg font-bold leading-6">Business Strategy</p>
        </div>
        <div className="absolute left-36 top-20 h-36 w-36 rounded-2xl border border-[#d99a22]/70 bg-[#09233c]/95 p-5 text-white shadow-[0_30px_70px_rgba(0,0,0,0.42),inset_0_0_32px_rgba(217,154,34,0.2)]">
          <Users className="h-10 w-10 text-[#d99a22]" />
          <p className="mt-5 text-lg font-bold leading-6">People & Culture</p>
        </div>
        <div className="absolute left-20 top-48 h-36 w-36 rounded-2xl border border-[#d99a22]/70 bg-[#09233c]/95 p-5 text-white shadow-[0_30px_70px_rgba(0,0,0,0.42),inset_0_0_32px_rgba(217,154,34,0.2)]">
          <Layers3 className="h-10 w-10 text-[#d99a22]" />
          <p className="mt-5 text-lg font-bold leading-6">Digital Systems</p>
        </div>
      </motion.div>

      {[
        [BriefcaseBusiness, 'left-[12%] bottom-[22%]'],
        [Network, 'right-[17%] bottom-[18%]'],
        [ShieldCheck, 'right-[5%] bottom-[36%]'],
        [Target, 'left-[28%] top-[34%]'],
      ].map(([Icon, className], index) => {
        const ItemIcon = Icon as typeof BriefcaseBusiness
        return (
          <motion.div
            key={String(className)}
            animate={{ y: [0, index % 2 ? 10 : -10, 0] }}
            transition={{ ...floatTransition, duration: 4 + index }}
            className={`absolute flex h-16 w-16 items-center justify-center rounded-full border border-[#d99a22]/70 bg-[#07182c]/80 text-[#d99a22] shadow-[0_0_26px_rgba(217,154,34,0.35)] ${className}`}
          >
            <ItemIcon className="h-8 w-8" />
          </motion.div>
        )
      })}
    </div>
  )
}

export function AboutIdentity3D() {
  return (
    <div className="relative mx-auto hidden h-80 w-full max-w-lg items-center justify-center lg:flex">
      <div className="absolute h-72 w-72 rounded-full bg-[#d99a22]/15 blur-2xl" />
      <GlowRing className="h-48 w-96 rotate-[-12deg]" />
      <GlowRing className="h-28 w-64 rotate-[16deg]" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={floatTransition}
        className="relative flex h-56 w-56 items-center justify-center"
      >
        <div className="absolute bottom-0 h-20 w-72 rounded-[50%] border border-[#d99a22]/50 bg-black/10 shadow-[0_0_34px_rgba(217,154,34,0.24)]" />
        <div className="absolute bottom-12 h-16 w-56 rounded-[50%] border border-white/15 bg-white/10" />
        <div className="absolute bottom-24 h-14 w-40 rounded-[50%] border border-[#d99a22]/60 bg-[#d99a22]/15" />
        <div className="absolute top-2 flex h-24 w-24 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_25%,#fff7d6,#d99a22_48%,#805a13)] shadow-[0_18px_50px_rgba(217,154,34,0.42)]">
          <BuildingIcon />
        </div>
      </motion.div>
      <GlassPanel className="left-0 top-6 w-44" title="Our Mission">
        <p className="mt-2 text-xs leading-5 text-white/70">Practical solutions for business growth.</p>
      </GlassPanel>
      <GlassPanel className="right-0 top-10 w-44" title="Our Vision">
        <p className="mt-2 text-xs leading-5 text-white/70">Reliable partner for growing organizations.</p>
      </GlassPanel>
      <GlassPanel className="right-6 bottom-4 w-40" title="Our Values">
        <div className="mt-3 grid gap-2 text-xs text-white/75">
          <span>Integrity</span>
          <span>Collaboration</span>
          <span>Impact</span>
        </div>
      </GlassPanel>
    </div>
  )
}

function BuildingIcon() {
  return (
    <div className="grid h-10 w-10 grid-cols-3 gap-1">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="rounded-sm bg-[#06172a]/80" />
      ))}
    </div>
  )
}

export function ServicesPillars3D() {
  const pillars = [
    [BarChart3, 'Business Strategy', 'Strategy & Growth'],
    [Users, 'People & Leadership', 'Human Capital'],
    [Search, 'Recruitment Solutions', 'Talent Fit'],
    [Layers3, 'Digital Systems', 'Automation'],
  ] as const

  return (
    <div className="grid gap-5 lg:grid-cols-4">
      {pillars.map(([Icon, title, subtitle], index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="group relative min-h-96 overflow-hidden rounded-lg border border-[#d99a22]/45 bg-[#07182c] p-5 text-white shadow-[0_18px_45px_rgba(7,24,44,0.25)]"
        >
          <div className="absolute inset-x-8 bottom-10 h-7 rounded-[50%] bg-[#d99a22]/35 blur-md" />
          <div className="absolute inset-x-10 bottom-12 h-32 rounded-[50%] border border-[#d99a22]/60" />
          <div className="absolute left-1/2 top-8 h-48 w-32 -translate-x-1/2 rounded-[42%] border border-white/25 bg-white/[0.08] shadow-[inset_0_0_28px_rgba(255,255,255,0.12)] backdrop-blur-md transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_36px_rgba(217,154,34,0.24),inset_0_0_28px_rgba(255,255,255,0.14)]" />
          <div className="relative z-10 flex min-h-48 items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#d99a22] text-[#07182c] shadow-[0_18px_36px_rgba(217,154,34,0.34)]">
              <Icon className="h-10 w-10" />
            </div>
          </div>
          <div className="relative z-10 mt-6 text-center">
            <h3 className="text-xl font-bold leading-6">{title}</h3>
            <p className="mt-3 text-xs font-semibold uppercase text-[#e1a126]">{subtitle}</p>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Solusi terarah untuk membantu organisasi tumbuh dengan fondasi yang lebih tertata.
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function ServicesHero3D() {
  const items = [
    [BarChart3, 'Strategy'],
    [Users, 'People'],
    [Search, 'Recruitment'],
    [Layers3, 'Systems'],
  ] as const

  return (
    <div className="relative mx-auto hidden h-[420px] w-full max-w-[620px] items-end justify-center lg:flex">
      <div className="absolute inset-0 rounded-[999px] bg-[radial-gradient(circle,rgba(217,154,34,0.16),transparent_62%)] blur-2xl" />
      <GlowRing className="left-[6%] top-[47%] h-28 w-[88%] rotate-[-8deg]" />
      <GlowRing className="left-[18%] top-[55%] h-20 w-[64%] rotate-[10deg]" />
      <div className="absolute bottom-6 h-20 w-[92%] rounded-[50%] border border-[#d99a22]/35 bg-black/10 shadow-[0_0_42px_rgba(217,154,34,0.24)]" />
      <div className="grid w-full grid-cols-4 items-end gap-4 px-2">
        {items.map(([Icon, label], index) => (
          <motion.div
            key={label}
            animate={{ y: [0, index % 2 ? -12 : -6, 0] }}
            transition={{ ...floatTransition, duration: 4.4 + index * 0.25 }}
            className="relative flex h-72 items-end justify-center"
          >
            <div className="absolute bottom-0 h-10 w-28 rounded-[50%] bg-[#d99a22]/30 blur-md" />
            <div className="relative flex h-64 w-full max-w-[124px] flex-col items-center justify-center rounded-[42%] border border-white/30 bg-white/[0.07] px-4 text-center text-white shadow-[inset_0_0_34px_rgba(255,255,255,0.13),0_24px_54px_rgba(0,0,0,0.26)] backdrop-blur-md">
              <div className="absolute inset-x-3 bottom-4 h-12 rounded-[50%] border border-[#d99a22]/45" />
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#d99a22] text-[#07182c] shadow-[0_16px_34px_rgba(217,154,34,0.34)]">
                <Icon className="h-10 w-10" />
              </div>
              <p className="mt-6 text-sm font-extrabold">{label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function ResourcesHero3D() {
  const tiles = [
    [BookOpen, 'HR'],
    [FileCheck2, 'CV'],
    [Calculator, 'TAX'],
    [BarChart3, 'INS'],
  ] as const

  return (
    <div className="relative mx-auto hidden h-[420px] w-full max-w-[620px] items-center justify-center lg:flex">
      <div className="absolute h-72 w-[520px] rounded-[999px] bg-[radial-gradient(circle,rgba(217,154,34,0.17),transparent_66%)] blur-2xl" />
      <GlowRing className="left-[10%] top-[28%] h-36 w-[80%] rotate-[-13deg]" />
      <GlowRing className="left-[20%] top-[38%] h-24 w-[60%] rotate-[14deg]" />
      <div className="absolute bottom-16 h-16 w-80 rounded-[50%] border border-[#d99a22]/35 bg-black/10 shadow-[0_0_34px_rgba(217,154,34,0.24)]" />
      <motion.div
        animate={{ y: [0, -12, 0], rotateY: [0, 6, 0] }}
        transition={{ ...floatTransition, duration: 5.8 }}
        className="relative z-10 flex h-44 w-36 items-center justify-center rounded-2xl border border-white/25 bg-white/[0.08] text-white shadow-[inset_0_0_32px_rgba(255,255,255,0.13),0_24px_56px_rgba(0,0,0,0.28)] backdrop-blur-md"
      >
        <BookOpen className="h-16 w-16 text-[#d99a22]" />
        <span className="absolute bottom-8 text-xl font-extrabold">YM-ID</span>
      </motion.div>
      {tiles.map(([Icon, label], index) => {
        const positions = [
          'left-10 top-14 rotate-[-8deg]',
          'right-20 top-10 rotate-[7deg]',
          'left-24 bottom-20 rotate-[8deg]',
          'right-12 bottom-24 rotate-[-7deg]',
        ]

        return (
          <motion.div
            key={label}
            animate={{ y: [0, index % 2 ? 9 : -9, 0] }}
            transition={{ ...floatTransition, duration: 4.2 + index * 0.35 }}
            className={`absolute flex h-24 w-24 items-center justify-center rounded-2xl border border-white/25 bg-white/[0.08] text-[#d99a22] shadow-[inset_0_0_24px_rgba(255,255,255,0.12),0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-md ${positions[index]}`}
          >
            <Icon className="h-10 w-10" />
            <span className="absolute bottom-2 text-[10px] font-extrabold text-white/80">{label}</span>
          </motion.div>
        )
      })}
    </div>
  )
}

export function Resource3DIcon({ type }: { type: 'tax' | 'dictionary' | 'cv' | 'insight' | 'url' }) {
  const config = {
    url: [Link2, 'URL'],
    tax: [Calculator, 'TAX'],
    dictionary: [BookOpen, 'HR'],
    cv: [FileCheck2, 'CV'],
    insight: [BarChart3, 'INS'],
  } as const
  const [Icon, label] = config[type]

  return (
    <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
      <div className="absolute bottom-2 h-5 w-20 rounded-[50%] bg-[#d99a22]/25 blur-md" />
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
        transition={floatTransition}
        className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/70 bg-[linear-gradient(145deg,#ffffff,#e9edf2)] shadow-[10px_16px_26px_rgba(15,23,42,0.16),inset_-8px_-8px_18px_rgba(7,24,44,0.08)]"
      >
        <Icon className="h-8 w-8 text-[#07182c]" />
        <span className="absolute bottom-2 rounded bg-[#d99a22] px-2 py-0.5 text-[10px] font-extrabold text-white">
          {label}
        </span>
      </motion.div>
    </div>
  )
}

export function ToolsLink3DVisual() {
  return (
    <div className="relative flex h-56 w-80 items-center justify-center">
      <div className="absolute bottom-8 h-12 w-56 rounded-[50%] bg-[#d99a22]/25 blur-xl" />
      <GlowRing className="h-24 w-56 rotate-[-16deg]" />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
        transition={floatTransition}
        className="relative z-10 flex"
      >
        <div className="h-24 w-32 -rotate-12 rounded-full border-[18px] border-[#d99a22] shadow-[0_18px_38px_rgba(217,154,34,0.28)]" />
        <div className="-ml-12 h-24 w-32 rotate-12 rounded-full border-[18px] border-white/80 shadow-[0_18px_38px_rgba(255,255,255,0.12)]" />
      </motion.div>
      <Link2 className="absolute bottom-6 h-10 w-10 text-[#d99a22]" />
    </div>
  )
}

export function ContactOrbit3D() {
  const nodes = [
    [MessageCircle, 'left-8 top-12'],
    [Mail, 'right-10 top-12'],
    [MapPin, 'right-12 bottom-14'],
    [CalendarDays, 'left-14 bottom-16'],
    [Users, 'left-1/2 bottom-2 -translate-x-1/2'],
  ] as const

  return (
    <div className="relative mx-auto hidden h-[420px] w-full max-w-[520px] items-center justify-center lg:flex">
      <div className="absolute h-80 w-80 rounded-full bg-[#d99a22]/12 blur-2xl" />
      <GlowRing className="h-72 w-72" />
      <GlowRing className="h-48 w-96 rotate-[18deg]" />
      <div className="absolute bottom-10 h-24 w-80 rounded-[50%] border border-[#d99a22]/40 bg-black/10 shadow-[0_0_40px_rgba(217,154,34,0.28)]" />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={floatTransition}
        className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full border border-[#d99a22]/80 bg-[#07182c] text-center shadow-[0_0_42px_rgba(217,154,34,0.32)]"
      >
        <div>
          <p className="text-3xl font-extrabold text-white">YM-ID</p>
          <p className="mt-2 text-sm text-white/70">We connect.</p>
        </div>
      </motion.div>
      {nodes.map(([Icon, className], index) => (
        <motion.div
          key={String(className)}
          animate={{ y: [0, index % 2 ? -8 : 8, 0] }}
          transition={{ ...floatTransition, duration: 4.5 + index * 0.35 }}
          className={`absolute flex h-20 w-20 items-center justify-center rounded-full border border-[#d99a22]/70 bg-white/10 text-[#d99a22] shadow-[0_0_28px_rgba(217,154,34,0.25)] backdrop-blur-md ${className}`}
        >
          <Icon className="h-10 w-10" />
        </motion.div>
      ))}
    </div>
  )
}
