import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://detailx.works";

export const metadata: Metadata = {
 metadataBase: new URL(baseUrl),
 title: {
  default:
   "DetailX | Premium Mobile Car Detailing in Lahore, Islamabad & Karachi",
  template: "%s | DetailX Car Detailing",
 },
 description:
  "Top-rated mobile car detailing service in Lahore, Islamabad, Rawalpindi, Karachi & Faisalabad. We bring the professional auto spa directly to your doorstep.",
 keywords: [
  "Mobile Car Detailing",
  "Car Wash Lahore",
  "Auto Detailing Islamabad",
  "Car Interior Cleaning",
  "Mobile Car Wash Karachi",
  "Ceramic Coating",
  "car detailing near me",
  "car detailing services",
  "car detailing in lahore",
  "car detailing in islamabad",
  "car detailing in karachi",
  "car detailing in rawalpindi",
  "car detailing in faisalabad",
  "DetailX",
 ],
 openGraph: {
  title: "DetailX | Premium Mobile Car Detailing Service",
  description:
   "Professional car detailing at your doorstep in Lahore, Islamabad, Karachi & more. Book your appointment today!",
  url: baseUrl,
  siteName: "DetailX",
  locale: "en_PK",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "DetailX - Mobile Car Detailing",
  description:
   "Premium car care delivered to you in Lahore, Islamabad & Karachi.",
 },
 alternates: {
  canonical: baseUrl,
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: "DetailX",
  image: `${baseUrl}/opengraph-image.png`,
  description:
   "Professional mobile car detailing service bringing the showroom shine to your doorstep. Serving major cities in Pakistan with premium products and expert care.",
  priceRange: "₨₨",
  address: {
   "@type": "PostalAddress",
   addressCountry: "PK",
  },
  areaServed: [
   { "@type": "City", name: "Lahore" },
   { "@type": "City", name: "Islamabad" },
   { "@type": "City", name: "Rawalpindi" },
   { "@type": "City", name: "Karachi" },
   { "@type": "City", name: "Faisalabad" },
  ],
  hasOfferCatalog: {
   "@type": "OfferCatalog",
   name: "Car Detailing Services",
   itemListElement: [
    {
     "@type": "Offer",
     itemOffered: {
      "@type": "Service",
      name: "Exterior Car Wash",
     },
    },
    {
     "@type": "Offer",
     itemOffered: {
      "@type": "Service",
      name: "Interior Deep Cleaning",
     },
    },
    {
     "@type": "Offer",
     itemOffered: {
      "@type": "Service",
      name: "Full Detailing Package",
     },
    },
   ],
  },
 };

 return (
  <html lang="en" className="scroll-smooth">
   <body className={`${inter.className} overflow-x-hidden`}>
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Navbar />
    {children}
    <FloatingContact />
    <Footer />
   </body>
  </html>
 );
}
