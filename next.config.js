/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'default',
    path: '/mbtiTest',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mbtiTest' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mbtiTest' : '',
}

module.exports = nextConfig 