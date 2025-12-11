// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // <--- REQUIRED: Makes it a Static Site (Free)
  images: {
    unoptimized: true,   // <--- REQUIRED: Fixes images on the Free plan
  },
};

export default nextConfig;
