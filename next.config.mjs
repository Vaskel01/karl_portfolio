import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: 'https',
        hostname: 's3-alpha.figma.com',
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
