'use client'

import { motion } from 'framer-motion'
import { experienceData } from '@/lib/portfolio-data'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-orange-500">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line and Dot */}
              <div className="hidden md:block absolute left-0 top-8 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-500/20">
                {index !== experienceData.length - 1 && (
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-background" />
                )}
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 10 }}
                className="md:ml-12 p-6 rounded-xl bg-card/50 backdrop-blur border border-border/20 hover:border-orange-500/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="md:hidden absolute -left-2 top-8 w-4 h-4 rounded-full bg-orange-500 border-4 border-background" />

                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {job.position}
                    </h3>
                    <p className="text-foreground/70 font-medium">{job.company}</p>
                    {job.location && (
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    )}
                    <span className="text-sm text-orange-500 font-semibold">
                      {job.period}
                    </span>
                  </div>

                  {job.jobDescription && (
                    <div className="mt-4 pt-4 border-t border-orange-500/20">
                      <h4 className="text-sm font-semibold text-orange-500 mb-2">Job Description</h4>
                      <ul className="space-y-2">
                        {job.jobDescription.map((description, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-foreground/60 text-sm"
                          >
                            <span className="text-orange-500 mt-1 flex-shrink-0">✓</span>
                            <span>{description}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
