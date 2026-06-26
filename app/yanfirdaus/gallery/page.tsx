'use client'

import Navbar from '@/components/portfolio/navbar'
import EvidenceGallery from '@/components/portfolio/evidence-gallery'
import Footer from '@/components/portfolio/footer'

export default function PortfolioGalleryPage() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-20"><EvidenceGallery /></div>
      <Footer />
    </main>
  )
}
