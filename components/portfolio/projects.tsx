'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'
import { CheckCircle2 } from 'lucide-react'

const Projects = () => {
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
    hidden: { opacity: 0, y: 40 },
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
            Featured <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 rounded-full mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative flex h-full min-h-[34rem] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] shadow-lg shadow-black/20 transition-all duration-300 hover:border-orange-500/35 hover:bg-white/[0.055] hover:shadow-orange-500/10"
            >
              <div className="relative h-44 overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-orange-500/30 bg-background/75 px-3 py-1 text-xs font-semibold text-orange-400 backdrop-blur">
                  {project.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-orange-400">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-foreground/60">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 space-y-2.5">
                  {project.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/70"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-foreground/65 transition-colors duration-300 group-hover:border-orange-500/25 group-hover:text-orange-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
