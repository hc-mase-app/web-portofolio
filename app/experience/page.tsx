'use client'

import Navbar from '@/components/portfolio/navbar'
import Experience from '@/components/portfolio/experience'
import Education from '@/components/portfolio/education'
import Footer from '@/components/portfolio/footer'

export default function ExperiencePage() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-20">
        <Experience />
        <Education />
      </div>
      <Footer />
    </main>
  )
}
