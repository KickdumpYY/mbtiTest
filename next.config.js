/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'default',
    path: '',
    domains: ['mbtitest.onrender.com']
  },
  output: 'standalone',
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 