'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Linkedin, Mail, Menu, Phone, X } from 'lucide-react'
import { siteData } from '@/lib/site-data'

const copyrightYear = 2026

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  {
    label: 'SERVICES',
    href: '/services',
    children: [
      { label: 'Business & Organization Solutions', href: '/services#business-organization' },
      { label: 'Leadership & People Development', href: '/services#leadership-people' },
      { label: 'Recruitment & Executive Search', href: '/services/recruitment-executive-search' },
      { label: 'Website & Digital Solutions', href: '/services#website-digital' },
    ],
  },
  {
    label: 'RESOURCES',
    href: '/resources',
    children: [
      { label: 'Business & Leadership Insights', href: '/resources#insights' },
    ],
  },
  {
    label: 'TOOLS',
    href: '/tools',
    children: [
      { label: 'URL Shortener', href: '/tools/url-shortener' },
      { label: 'CV ATS Generator', href: '/tools/cv-ats-generator' },
      { label: 'Salary & Tax Calculator', href: '/tools/salary-tax-calculator' },
      { label: 'Kamus HR', href: '/tools/kamus-hr' },
    ],
  },
  { label: 'CONTACT', href: '/contact' },
]

export function ConsultingNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 transition ${scrolled ? 'bg-[#06172a]/95 shadow-lg backdrop-blur' : 'bg-[#06172a]'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d99a22]/35 bg-white/[0.03] shadow-[0_0_24px_rgba(217,154,34,0.08)]">
            <Image src="/favicon.png" alt="YM-ID" width={28} height={28} className="h-7 w-7 object-contain" />
          </div>
          <span className="grid">
            <span className="text-xl font-extrabold tracking-wide sm:text-2xl">{siteData.brand}</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50 sm:block">
              {siteData.descriptor}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            const hasChildren = Boolean(item.children?.length)

            return (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={`relative inline-flex items-center gap-1.5 py-5 text-xs font-semibold transition ${active ? 'text-white' : 'text-white/75 hover:text-white'}`}>
                  {item.label}
                  {hasChildren && <ChevronDown className="h-3.5 w-3.5 transition duration-[240ms] group-hover:rotate-180 group-focus-within:rotate-180" />}
                  {active && <span className="absolute inset-x-0 bottom-2.5 h-0.5 bg-[#d99a22]" />}
                </Link>

                {hasChildren && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 -translate-y-2 scale-y-95 pt-3 opacity-0 [clip-path:inset(0_0_100%_0)] [transform-origin:top_center] transition-[opacity,transform,clip-path] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-y-100 group-hover:opacity-100 group-hover:[clip-path:inset(0_0_0%_0)] group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-y-100 group-focus-within:opacity-100 group-focus-within:[clip-path:inset(0_0_0%_0)]">
                    <div className="absolute inset-x-0 top-0 h-3" />
                    <div className="absolute left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-slate-200 bg-white" />
                    <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5">
                      <div className="border-b border-slate-100 px-3 py-2">
                        <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#c88916]">{item.label}</p>
                      </div>
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/item mt-1 flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-[#07182c] transition hover:bg-[#fbfaf7] hover:text-[#c88916]"
                        >
                          <span>{child.label}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d99a22] opacity-0 transition group-hover/item:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>
        <a href={siteData.whatsapp} target="_blank" rel="noreferrer" className="hidden rounded-md bg-[#d99a22] px-5 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-[#eba92e] lg:inline-flex">
          GET IN TOUCH
        </a>
        <button type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} onClick={() => setOpen((value) => !value)} className="rounded-md border border-white/20 p-2 text-white lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#06172a] px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length)
              const expanded = openMobileGroup === item.label

              if (!hasChildren) {
                return (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/5 px-2 py-3 text-sm font-semibold text-white/80">
                    {item.label}
                  </Link>
                )
              }

              return (
                <div key={item.href} className="border-b border-white/5">
                  <button
                    type="button"
                    onClick={() => setOpenMobileGroup((current) => (current === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between px-2 py-3 text-left text-sm font-semibold text-white/80"
                    aria-expanded={expanded}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition ${expanded ? 'rotate-180 text-[#d99a22]' : ''}`} />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-[250ms] ease-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    aria-hidden={!expanded}
                  >
                    <div className="grid min-h-0 gap-1 pb-3 pl-4">
                      <Link href={item.href} onClick={() => setOpen(false)} tabIndex={expanded ? 0 : -1} className="rounded px-2 py-2 text-xs font-semibold text-[#e1a126]">
                        Lihat Semua {item.label}
                      </Link>
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          tabIndex={expanded ? 0 : -1}
                          className="rounded px-2 py-2 text-xs font-semibold text-white/70 hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
            <a href={siteData.whatsapp} target="_blank" rel="noreferrer" className="mt-4 rounded-md bg-[#d99a22] px-5 py-3 text-center text-sm font-bold text-white">
              GET IN TOUCH
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export function ConsultingFooter() {
  return (
    <footer className="bg-[#06172a] px-5 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/15 py-9 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d99a22]/35 bg-white/[0.03]">
              <Image src="/favicon.png" alt="YM-ID" width={28} height={28} className="h-7 w-7 object-contain" />
            </div>
            <div>
              <p className="text-xl font-extrabold">{siteData.brand}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{siteData.descriptor}</p>
            </div>
          </div>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded bg-white p-1 text-[#06172a]">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <div>
          <p className="text-sm font-bold">NAVIGASI</p>
          <div className="mt-4 grid gap-1.5">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="text-xs text-white/75 hover:text-[#d99a22]">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">HUBUNGI KAMI</p>
          <div className="mt-4 grid gap-3 text-xs text-white/75">
            <a href={siteData.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2"><Phone className="h-4 w-4" />{siteData.phoneDisplay}</a>
            <a href={`mailto:${siteData.email}`} className="flex items-center gap-2"><Mail className="h-4 w-4" />{siteData.email}</a>
            <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2"><Linkedin className="h-4 w-4" />linkedin.com/in/yanfirdaus</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">IKUTI KAMI</p>
          <p className="mt-4 text-xs leading-6 text-white/70">Terhubung di LinkedIn untuk mendapatkan insight dan informasi terbaru.</p>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded bg-white p-1 text-[#06172a]"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/10 py-4 text-center text-xs text-white/55">
        &copy; {copyrightYear} Yan Firdaus. All rights reserved.
      </div>
    </footer>
  )
}

export function ConsultingShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-[#07182c]">
      <ConsultingNavbar />
      {children}
      <ConsultingFooter />
    </main>
  )
}
