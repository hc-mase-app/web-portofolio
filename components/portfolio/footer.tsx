'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/portfolio-data'

const copyrightYear = 2026

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur border-t border-border/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-foreground">
                {portfolioData.name}
              </h3>
              <p className="text-foreground/60 text-sm">
                {portfolioData.title}
              </p>
              <p className="text-foreground/50 text-sm">
                Strategic HR and human capital development professional.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Projects', id: 'projects' },
                ].map((link) => (
                  <motion.li
                    key={link.id}
                    whileHover={{ x: 5 }}
                  >
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-foreground/60 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-foreground">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/60">
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {portfolioData.contact.email}
                  </a>
                </p>
                <p className="text-foreground/60">
                  <a
                    href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {portfolioData.contact.phone}
                  </a>
                </p>
                <p className="text-foreground/60">
                  {portfolioData.contact.location}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/10" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/50"
          >
            <p>
              &copy; {copyrightYear} {portfolioData.name}. All rights reserved.
            </p>
            <p>
              Designed & Built with <span className="text-orange-500">♥</span> for Excellence
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
