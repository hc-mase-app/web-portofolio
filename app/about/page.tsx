'use client'

import Navbar from '@/components/portfolio/navbar'
import About from '@/components/portfolio/about'
import Skills from '@/components/portfolio/skills'
import TechnicalSkills from '@/components/portfolio/technical-skills'
import Footer from '@/components/portfolio/footer'

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-20">
        <About />
        <Skills />
        <TechnicalSkills />
      </div>
      <Footer />
    </main>
  )
}
