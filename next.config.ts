import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Reduce memory usage during dev compilation
  experimental: {
    // Limit concurrent workers to reduce RAM
    workerThreads: false,
    cpus: 1,
  },
  // Fix "multiple lockfiles" warning
  turbopack: {
    root: path.resolve(__dirname),
  } as never,
};

export default nextConfig;
