'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/yanfirdaus' },
    { label: 'About Me', href: '/yanfirdaus/about' },
    { label: 'Experience', href: '/yanfirdaus/experience' },
    { label: 'Projects', href: '/yanfirdaus/projects' },
    { label: 'Evidence', href: '/yanfirdaus/gallery' },
    { label: 'Certifications', href: '/yanfirdaus/certifications' },
    { label: 'Contact', href: '/yanfirdaus/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex flex-shrink-0 items-center gap-3">
            <Link
              href="/"
              aria-label="Kembali ke situs utama YM-ID"
              className="inline-flex items-center gap-1 rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-1.5 text-xs font-semibold text-orange-500 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              YM-ID
            </Link>
            <Link href="/yanfirdaus">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer text-lg font-bold text-foreground"
              >
                Yan Firdaus
              </motion.div>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="ml-3 flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <motion.button
                    className={`group relative flex-shrink-0 px-2.5 py-2 text-sm font-medium transition-all ${
                      isActive ? 'text-orange-500' : 'text-foreground/70 hover:text-foreground'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0"
                        transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500/0 group-hover:bg-gradient-to-r group-hover:from-orange-500/0 group-hover:via-orange-500/60 group-hover:to-orange-500/0 transition-all duration-300" />
                  </motion.button>
                </Link>
              )
            })}
            <motion.a
              href="/cv.pdf"
              download
              className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-2 text-sm font-medium text-orange-500 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div className="relative flex h-14 items-center justify-center">
            <Link
              href="/"
              aria-label="Kembali ke situs utama YM-ID"
              className="absolute left-0 inline-flex items-center gap-1 rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-1.5 text-xs font-semibold text-orange-500 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              YM-ID
            </Link>
            <Link href="/yanfirdaus">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-lg font-bold text-foreground cursor-pointer flex-shrink-0"
              >
                Yan Firdaus
              </motion.div>
            </Link>
          </div>

          {/* Mobile Navigation Items - Flex Wrap */}
          <div className="flex flex-wrap items-center justify-center gap-1 px-2 pb-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <motion.button
                    className={`px-2.5 py-1.5 text-xs font-medium transition-all relative group ${
                      isActive ? 'text-orange-500' : 'text-foreground/70 hover:text-foreground'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0"
                        transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500/0 group-hover:bg-gradient-to-r group-hover:from-orange-500/0 group-hover:via-orange-500/60 group-hover:to-orange-500/0 transition-all duration-300" />
                  </motion.button>
                </Link>
              )
            })}
            <motion.a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-1.5 text-xs font-medium text-orange-500 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
