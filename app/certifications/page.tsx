'use client'

import Navbar from '@/components/portfolio/navbar'
import Education from '@/components/portfolio/education'
import Certifications from '@/components/portfolio/certifications'
import Footer from '@/components/portfolio/footer'

export default function CertificationsPage() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-20">
        <Education />
        <Certifications />
      </div>
      <Footer />
    </main>
  )
}
