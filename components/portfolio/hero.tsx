'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioData } from '@/lib/portfolio-data'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/80">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {portfolioData.title}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-orange-500 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {portfolioData.subtitle}
              </motion.p>
              <motion.p
                className="text-lg text-foreground/70 leading-relaxed max-w-lg text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {portfolioData.intro}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/yanfirdaus/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  View My Work
                </motion.button>
              </Link>
              <Link href="/yanfirdaus/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500/10 transition-colors"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Projects Completed', value: '9+' },
                { label: 'Team Members Led', value: '250+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border/20"
                >
                  <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 md:h-full min-h-96"
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
              className="relative h-full rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl z-10" />
              <Image
                src={portfolioData.image}
                alt={portfolioData.name}
                fill
                className="object-cover"
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
  )
}

export default Hero
