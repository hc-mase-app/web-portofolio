'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'

export default function TechnicalSkills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const proficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-orange-500'
      case 'Advanced':
        return 'bg-orange-400'
      case 'Intermediate':
        return 'bg-orange-300'
      default:
        return 'bg-muted'
    }
  }

  return (
    <section className="relative min-h-screen bg-card/30 py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Digital & Technical Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficiency in HR systems, analytics platforms, and modern business applications
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.technicalSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-lg border border-orange-500/20 bg-background p-6 hover:border-orange-500/40 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground pr-2">{skill.name}</h3>
                  <span className="text-xs font-medium text-orange-500 whitespace-nowrap">{skill.proficiency}</span>
                </div>
                
                {/* Proficiency Bar */}
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${proficiencyColor(skill.proficiency)}`}
                    initial={{ width: 0 }}
                    whileInView={{
                      width:
                        skill.proficiency === 'Expert'
                          ? '100%'
                          : skill.proficiency === 'Advanced'
                            ? '85%'
                            : skill.proficiency === 'Intermediate'
                              ? '70%'
                              : '50%',
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages Section */}
        <motion.div
          className="mt-20 pt-12 border-t border-orange-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">Languages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.languages.map((lang, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-between p-4 rounded-lg border border-orange-500/20 bg-background/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <span className="font-medium text-foreground">{lang.language}</span>
                <span className="text-sm text-orange-500">{lang.proficiency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
