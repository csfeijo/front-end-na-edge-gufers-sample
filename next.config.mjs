/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental edge features
  experimental: {
    runtime: 'edge',
  },
  
  // Optimize for edge deployment
  output: 'standalone',
  
  // Configure headers for better edge performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Edge-Optimized',
            value: 'true',
          },
        ],
      },
    ]
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Images configuration
  images: {
    unoptimized: true,
  },
}

export default nextConfig
