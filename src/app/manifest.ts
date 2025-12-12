import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
 return {
  name: "DetailX - Premium Mobile Car Detailing",
  short_name: "DetailX",
  description:
   "Premier mobile car detailing service in Lahore, Islamabad, Karachi & more.",
  start_url: "/",
  display: "standalone",
  background_color: "#000000",
  theme_color: "#EF4444", // Red-500
  icons: [
   {
    src: "/favicon.ico",
    sizes: "any",
    type: "image/x-icon",
   },
  ],
 };
}
