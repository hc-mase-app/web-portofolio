'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'
import { X } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  caption: string
  category: string
  image: string
}

const EvidenceGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const categories = ['All', ...new Set(portfolioData.gallery.map(item => item.category))]
  
  const filteredGallery = selectedCategory === 'All'
    ? portfolioData.gallery
    : portfolioData.gallery.filter(item => item.category === selectedCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            EVIDANCE <span className="text-orange-500">GALLERY</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-card border border-border text-foreground/70 hover:text-foreground hover:border-orange-500/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer"
              >
                <div className="relative h-32 rounded-xl overflow-hidden bg-card border border-border/30 hover:border-orange-500/50 transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-orange-400 text-sm font-medium">
                      {item.category}
                    </p>
                  </div>

                  {/* Icon Overlay */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-black"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
              >
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-foreground/70 mb-3">
                  {selectedImage.caption}
                </p>
                <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
              </motion.div>

              {/* Navigation Info */}
              <div className="absolute bottom-6 right-6 text-foreground/60 text-sm">
                {filteredGallery.findIndex(img => img.id === selectedImage.id) + 1} / {filteredGallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default EvidenceGallery
