import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'cdn.dummyjson.com'],
  },
};

export default nextConfig;


// remotePatterns: [
//   {
//     protocol: 'https',
//     hostname: 'cdn.dummyjson.com',
//   },
//   {
//     protocol: 'https',
//     hostname: 'lh3.googleusercontent.com',
//   },
// ],