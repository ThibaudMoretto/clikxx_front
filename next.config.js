/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'static-ca-cdn.eporner.com',
      'ei-ph.rdtcdn.com',
      'di-ph.rdtcdn.com',
    ],
  },
};

module.exports = nextConfig;
