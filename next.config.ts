import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://nice-emails-983543.framer.app/:path*',
        basePath: false,
      },
    ];
},
};

export default nextConfig;