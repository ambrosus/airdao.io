/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['new-airdao-website.cdn.prismic.io', 'images.prismic.io'],
  },
}

module.exports = nextConfig
