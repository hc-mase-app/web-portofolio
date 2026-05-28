'use client'

import { useEffect } from 'react'

export default function CVPage() {
  useEffect(() => {
    const link = document.createElement('a')
    link.href = '/cv.pdf?download=true'
    link.download = 'Yan-Firdaus-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return (
    <iframe
      src="/cv.pdf"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
    />
  )
}