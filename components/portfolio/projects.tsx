'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'

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
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/8 to-white/[0.03] border border-white/15 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-foreground/60 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <span className="text-orange-500 flex-shrink-0 mt-1">✓</span>
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/10">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/30 hover:bg-orange-500/20 transition-colors"
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
