/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'lecture-1.vercel.app',
    //     pathname: '/example.jpg'
    //   }
    // ]
    domains: ['lecture-1.vercel.app'],
  }
}

module.exports = nextConfig
