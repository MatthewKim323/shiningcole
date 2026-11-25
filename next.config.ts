import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,
  experimental: { globalNotFound: true },
};

export default nextConfig;
