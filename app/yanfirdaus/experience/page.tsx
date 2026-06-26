'use client'

import Navbar from '@/components/portfolio/navbar'
import Experience from '@/components/portfolio/experience'
import Footer from '@/components/portfolio/footer'

export default function PortfolioExperiencePage() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-20"><Experience /></div>
      <Footer />
    </main>
  )
}
