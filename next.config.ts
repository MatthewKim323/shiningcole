import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,
  experimental: { globalNotFound: true },
  async redirects() {
    // the free-wash offer sends visitors to the sign-up form; until the account's own form exists it goes to support
    return [{ source: "/freewash/", destination: "/help-and-support/", permanent: false }];
  },
};

export default nextConfig;
