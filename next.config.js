/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['kickdumpyy.github.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.onrender.com',
      },
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig 