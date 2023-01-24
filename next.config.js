/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: 'www.facebook.com'
    }]
  }
}

module.exports = nextConfig
