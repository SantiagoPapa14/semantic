import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/semantic",
  assetPrefix: "/semantic",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
