/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/experience', destination: '/yanfirdaus/experience', permanent: true },
      { source: '/projects', destination: '/yanfirdaus/projects', permanent: true },
      { source: '/gallery', destination: '/yanfirdaus/gallery', permanent: true },
      { source: '/certifications', destination: '/yanfirdaus/certifications', permanent: true },
    ]
  },
}

export default nextConfig
