import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  // Security headers are configured via meta tags in layout.tsx for static export
  // For production deployment, configure headers in your hosting platform (Vercel, Netlify, etc.)
};

export default nextConfig;
