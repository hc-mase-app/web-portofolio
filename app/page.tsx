import Navbar from '@/components/portfolio/navbar'
import Hero from '@/components/portfolio/hero'
import About from '@/components/portfolio/about'
import Experience from '@/components/portfolio/experience'
import Skills from '@/components/portfolio/skills'
import TechnicalSkills from '@/components/portfolio/technical-skills'
import Projects from '@/components/portfolio/projects'
import Education from '@/components/portfolio/education'
import Certifications from '@/components/portfolio/certifications'
import EvidenceGallery from '@/components/portfolio/evidence-gallery'
import Contact from '@/components/portfolio/contact'
import Footer from '@/components/portfolio/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <TechnicalSkills />
      <Projects />
      <Education />
      <Certifications />
      <EvidenceGallery />
      <Contact />
      <Footer />
    </main>
  )
}
