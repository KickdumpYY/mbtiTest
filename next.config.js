/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['kickdumpyy.github.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.railway.app',
      },
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig 