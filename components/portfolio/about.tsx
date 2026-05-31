'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'
import { Building2, ChartNoAxesCombined, HardHat, MonitorCog, UsersRound } from 'lucide-react'

const expertiseIcons = [
  ChartNoAxesCombined,
  Building2,
  UsersRound,
  MonitorCog,
  HardHat,
]

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/80 to-background border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 rounded-full mx-auto" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-lg text-foreground/70 leading-loose mb-8 max-w-4xl text-justify mx-auto">
            {portfolioData.about.description}
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {portfolioData.about.expertise.map((item, index) => {
            const Icon = expertiseIcons[index] ?? ChartNoAxesCombined

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative h-full min-h-64 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-orange-500/35 hover:bg-white/[0.055] hover:shadow-orange-500/10"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />

                <div className="relative z-10 flex h-full flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10 text-orange-400 transition-colors duration-300 group-hover:border-orange-500/45 group-hover:bg-orange-500/15">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-orange-400">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/60 transition-colors duration-300 group-hover:text-foreground/75">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>


      </div>
    </section>
  )
}

export default About
