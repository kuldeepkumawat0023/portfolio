import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.29.231",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
