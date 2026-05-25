'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {portfolioData.about.expertise.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/[0.03] backdrop-blur-xl border border-white/15 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

export default About
