'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { portfolioData } from '@/lib/portfolio-data'

const Contact = () => {
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
      transition: { duration: 0.6 },
    },
  }

  const contactItems = [
    {
      icon: '✉',
      label: 'Email',
      value: portfolioData.contact.email,
      link: `mailto:${portfolioData.contact.email}`,
    },
    {
      icon: '📱',
      label: 'Phone',
      value: portfolioData.contact.phone,
      link: `tel:${portfolioData.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: '📍',
      label: 'Location',
      value: portfolioData.contact.location,
      link: '#',
    },
    {
      icon: '🌐',
      label: 'Website',
      value: portfolioData.contact.website,
      link: `https://${portfolioData.contact.website}`,
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/10"
    >
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
            Let&apos;s <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and discussing HR innovations.
          </p>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/20 hover:border-orange-500/50 hover:bg-card/80 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-sm text-foreground/60 mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-orange-500 transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { name: 'LinkedIn', icon: '🔗', link: '#' },
            { name: 'Email', icon: '✉', link: `mailto:${portfolioData.contact.email}` },
            { name: 'Phone', icon: '📞', link: `tel:${portfolioData.contact.phone.replace(/\s/g, '')}` },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-xl hover:bg-orange-500/30 transition-colors"
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to work together?
          </h3>
          <p className="text-foreground/60 mb-6 max-w-md mx-auto">
            Let&apos;s discuss how I can help drive your organization&apos;s human capital strategy and growth.
          </p>
          <motion.a
            href={`mailto:${portfolioData.contact.email}`}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Send me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
