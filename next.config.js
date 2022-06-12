/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['sp-api.alejandrosandi.com'],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
