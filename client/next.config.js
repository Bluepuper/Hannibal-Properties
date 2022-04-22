const path = require('path')
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/dashboard/properties/delete',
        destination: '/dashboard/properties', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}

module.exports = {
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['i.ibb.co'],
  },
}
