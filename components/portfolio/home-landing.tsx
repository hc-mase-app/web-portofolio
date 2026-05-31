'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioData } from '@/lib/portfolio-data'
import { ArrowRight, Award, BriefcaseBusiness, FolderKanban, Images, Mail, UserRound } from 'lucide-react'

const HomeLanding = () => {
  const menuItems = [
    {
      title: 'About',
      description: 'Professional profile and expertise',
      href: '/about',
      icon: UserRound,
    },
    {
      title: 'Experience',
      description: 'Career journey and achievements',
      href: '/experience',
      icon: BriefcaseBusiness,
    },
    {
      title: 'Projects',
      description: 'Featured work and initiatives',
      href: '/projects',
      icon: FolderKanban,
    },
    {
      title: 'Gallery',
      description: 'Visual evidence and moments',
      href: '/gallery',
      icon: Images,
    },
    {
      title: 'Certifications',
      description: 'Credentials and achievements',
      href: '/certifications',
      icon: Award,
    },
    {
      title: 'Contact',
      description: 'Get in touch',
      href: '/contact',
      icon: Mail,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-background/50 relative overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.1rem] xl:text-[2.25rem] font-bold text-foreground leading-tight lg:whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {portfolioData.name}
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-orange-500 font-semibold leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {portfolioData.title}
                </motion.p>
                <motion.p
                  className="text-base text-foreground/60 leading-relaxed max-w-lg text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Professional with 15+ years of overall professional experience, including 10+ years specializing in Human Capital Development, HCGA, and Organizational Development. Passionate about HR digitalization, leadership development, and building people strategies aligned with business growth and organizational effectiveness.
                </motion.p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { label: 'Years Experience', value: '15+' },
                  { label: 'Projects Completed', value: '9+' },
                  { label: 'Team Members Led', value: '250+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 group overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-all duration-300" />
                    <div className="relative z-10">
                      <p className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">{stat.value}</p>
                      <p className="text-sm text-foreground/60 mt-1">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full order-1 lg:order-2"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl z-10" />
                <Image
                  src={portfolioData.image}
                  alt={portfolioData.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-4 -right-4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore My Portfolio
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Navigate through my professional journey, expertise, and achievements
            </p>
          </motion.div>

          {/* Menu Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems.map((item, index) => {
              const Icon = item.icon

              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="group relative h-full min-h-56 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-7 shadow-lg shadow-black/20 transition-all duration-300 hover:border-orange-500/35 hover:bg-white/[0.055] hover:shadow-orange-500/10"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />

                    <div className="relative z-10 flex h-full flex-col gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10 text-orange-400 transition-colors duration-300 group-hover:border-orange-500/45 group-hover:bg-orange-500/15">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>

                      <div className="flex-1 space-y-2">
                        <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-orange-400">
                          {item.title}
                        </h3>
                        <p className="text-foreground/60 leading-relaxed transition-colors duration-300 group-hover:text-foreground/75">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-3">
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/10 py-8 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-foreground/60 text-sm">
              &copy; 2026 Yan Firdaus. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href={`mailto:${portfolioData.contact.email}`} className="text-foreground/60 hover:text-orange-500 transition-colors text-sm">
                Email
              </Link>
              {portfolioData.contact.linkedin && (
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-orange-500 transition-colors text-sm">
                  LinkedIn
                </a>
              )}
              {portfolioData.contact.website && (
                <a href={portfolioData.contact.website} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-orange-500 transition-colors text-sm">
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeLanding