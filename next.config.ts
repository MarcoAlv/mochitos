import type { NextConfig } from "next";

const remoteHost =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/^https?:\/\//, '') || 'proto.sunnyserver.uk';

const nextConfig: NextConfig = {
  output: 'standalone',
  generateBuildId: async () => `${Date.now()}`,
  reactStrictMode: true,
  images: {
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: remoteHost,
        pathname: '/assets/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};


export default nextConfig;
