import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/semantic",
  assetPrefix: "/semantic/",
};

export default nextConfig;
