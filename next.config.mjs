/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  headers: async () => {
    return [
      {
        source: '/cv',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Yan-Firdaus-CV.pdf"',
          },
        ],
      },
      {
        source: '/cv.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Yan-Firdaus-CV.pdf"',
          },
        ],
      },
    ]
  },
}

export default nextConfig