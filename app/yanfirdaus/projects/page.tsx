'use client'

import Navbar from '@/components/portfolio/navbar'
import Projects from '@/components/portfolio/projects'
import Footer from '@/components/portfolio/footer'

export default function PortfolioProjectsPage() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-20"><Projects /></div>
      <Footer />
    </main>
  )
}
