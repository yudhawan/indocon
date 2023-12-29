/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'indonesiacomiccon.com',
            port: '',
            pathname: '/_nuxt/img/**',
          },
          {
            protocol: 'https',
            hostname: 'indonesiacomiccon.com',
            port: '',
            pathname: '/img/gallery/thumb/**',
          },
        ],
      },
}

module.exports = nextConfig
