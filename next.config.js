/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'static-ca-cdn.eporner.com',
      'imggen.eporner.com',
      'ei-ph.rdtcdn.com',
      'di-ph.rdtcdn.com',
      'di.rdtcdn.com',
      'ei.rdtcdn.com',
      'fi1.ypncdn.com',
      'cdn77-pic.xvideos-cdn.com',
      'img-l3.xvideos-cdn.com',
      'img-hw.xvideos-cdn.com',
    ],
  },
};

module.exports = nextConfig;
