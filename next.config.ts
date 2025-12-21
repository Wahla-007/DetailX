import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Add this line for static export
  images: {
    unoptimized: true, // Required for static export
  },
  // other existing config... 
};

export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",      // <--- REQUIRED: Makes it a Static Site (Free)
//   images: {
//     unoptimized: true,   // <--- REQUIRED: Fixes images on the Free plan
//   },
// };

// export default nextConfig;
