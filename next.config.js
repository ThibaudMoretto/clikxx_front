/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'static-ca-cdn.eporner.com',
      'ei-ph.rdtcdn.com',
      'di-ph.rdtcdn.com',
      'di.rdtcdn.com',
      'ei.rdtcdn.com',
      'fi1.ypncdn.com',
    ],
  },
};

module.exports = nextConfig;
