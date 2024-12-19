import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.drivingexamexpert.com",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
