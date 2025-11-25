import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trackercdn.com',
      },
      {
        protocol: 'https',
        hostname: 'magesolution.com',
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
