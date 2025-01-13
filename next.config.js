/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'default',
    path: '/mbtiTest',
    domains: ['kickdumpyy.github.io'],
  },
  output: 'export',
  basePath: '/mbtiTest',
  assetPrefix: '/mbtiTest',
}

module.exports = nextConfig 