/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove the invalid experimental option
  experimental: {
    // Only include valid experimental flags here
    // For Next.js 15.2.4 valid options include:
    // serverActions: true,
    // optimizePackageImports: ['package-name'],
  },
  webpack: (config) => {
    config.optimization.splitChunks = false;
    return config;
  }
};

export const config = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add the domain of the external image
  },
};

export default { ...nextConfig, ...config };