import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
 return {
  name: "WashandDetail - Premium Mobile Car Detailing",
  short_name: "WashandDetail",
  description:
   "Premier mobile car detailing service in Lahore, Islamabad, Karachi & more.",
  start_url: "/",
  display: "standalone",
  background_color: "#000000",
  theme_color: "#EF4444",
  icons: [
   {
    src: "/favicon.ico",
    sizes: "any",
    type: "image/x-icon",
   },
  ],
 };
}