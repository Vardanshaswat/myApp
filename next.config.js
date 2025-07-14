/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.pinclipart.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
