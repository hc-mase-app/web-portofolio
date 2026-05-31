'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [pathname, setPathname] = useState('')
  const currentPathname = usePathname()

  useEffect(() => {
    setPathname(currentPathname)
  }, [currentPathname])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'AboutMe', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Evidance', href: '/gallery' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contact', href: '/contact' },
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
      onMouseMove={() => window.scrollY > 50 && setIsScrolled(true)}
      onMouseLeave={() => setIsScrolled(window.scrollY > 50)}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo - Links to Home */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-foreground cursor-pointer flex-shrink-0"
            >
              Portofolio
            </motion.div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-1 ml-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <motion.button
                    className={`px-3 py-2 text-sm font-medium transition-all relative group flex-shrink-0 ${
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
          <div className="flex items-center justify-center h-14">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-lg font-bold text-foreground cursor-pointer flex-shrink-0"
              >
                Portofolio
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
