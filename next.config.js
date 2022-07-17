/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index/'
      }
    ]
  },
  output: 'standalone',
  trailingSlash: true,
}

module.exports = config
