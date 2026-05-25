'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'
import { BookOpen } from 'lucide-react'

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen bg-background py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />

          {/* Education Cards */}
          <div className="space-y-12">
            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-background mt-2 md:mt-4" />

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-8">
                  <motion.div
                    className="group relative overflow-hidden rounded-xl border border-orange-500/20 bg-card/50 p-8 backdrop-blur hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <BookOpen className="w-6 h-6 text-orange-500" />
                        <span className="text-sm font-semibold text-orange-500">{edu.period}</span>
                      </div>

                      {/* Degree */}
                      <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>

                      {/* Institution */}
                      <p className="text-lg text-orange-400 mb-2">{edu.institution}</p>

                      {/* Location */}
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
