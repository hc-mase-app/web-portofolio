'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'

export default function Skills() {
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
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="relative min-h-screen bg-background py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Core Competencies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic expertise across human capital development, organizational performance, and operational excellence
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-lg border border-orange-500/20 bg-card/50 p-6 backdrop-blur hover:border-orange-500/50 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, itemIdx) => (
                    <li key={itemIdx} className="flex items-center text-foreground/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-3" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
