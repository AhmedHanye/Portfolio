import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "react",
      "react-dom",
      "axios",
      "gsap",
      "@gsap/react",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-tooltip",
    ],
  },
};

export default nextConfig;
