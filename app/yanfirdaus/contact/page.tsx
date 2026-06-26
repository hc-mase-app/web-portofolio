'use client'

import Navbar from '@/components/portfolio/navbar'
import Contact from '@/components/portfolio/contact'
import Footer from '@/components/portfolio/footer'

export default function PortfolioContactPage() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-20"><Contact /></div>
      <Footer />
    </main>
  )
}
