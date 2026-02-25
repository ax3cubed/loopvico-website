import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  // Note: Headers and redirects are configured at the hosting platform level
  // for static exports. Security headers are set via meta tags in layout.tsx
};

export default nextConfig;
