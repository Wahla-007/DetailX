import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import PromotionPopup from "@/components/ui/PromotionPopup";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseUrl =
 process.env.NEXT_PUBLIC_BASE_URL || "https://washanddetail.works";

export const metadata: Metadata = {
 metadataBase: new URL(baseUrl),
 title: {
  default:
   "WashAndDetail Works | #1 Top Rated Mobile Car Wash Service Providers Near Me",
  template: "%s | WashAndDetail Works",
 },
 description:
  "Looking for car wash services near me? We provide premium autodetailing services in Lahore, Islamabad, Rawalpindi, Karachi & Faisalabad. Mobile car detailing at your doorstep.",
 keywords: [
  "wash and details",
  "Wash and detail works",
  "Car Wash Services Near Me",
  "Autodetailing Services",
  "Mobile Car Detailing",
  "Car Wash Lahore",
  "Auto Detailing Islamabad",
  "Car Interior Cleaning",
  "Mobile Car Wash Karachi",
  "Ceramic Coating",
 ],
 openGraph: {
  title: "WashAndDetail Works | Premium Mobile Car Detailing Service",
  description:
   "Expert autodetailing services and mobile car wash near you in Lahore, Islamabad, Karachi & more. Book your appointment today!",
  url: baseUrl,
  siteName: "WashAndDetail Works",
  locale: "en_PK",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "WashAndDetail Works - Mobile Car Detailing",
  description:
   "Premium autodetailing and car wash services delivered to you in Lahore, Islamabad & Karachi.",
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
  "@graph": [
   {
    "@type": "AutoDetailing",
    name: "WashAndDetail Works",
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
   },
   {
    "@type": "FAQPage",
    mainEntity: [
     {
      "@type": "Question",
      name: "Where can I find car wash services near me?",
      acceptedAnswer: {
       "@type": "Answer",
       text:
        "WashAndDetail Works offers mobile car wash and autodetailing services at your doorstep in Lahore, Islamabad, Rawalpindi, Karachi, and Faisalabad.",
      },
     },
     {
      "@type": "Question",
      name: "What autodetailing services do you provide?",
      acceptedAnswer: {
       "@type": "Answer",
       text:
        "We provide comprehensive autodetailing services including exterior wash, interior deep cleaning, ceramic coating, paint correction, and engine bay washing.",
      },
     },
    ],
   },
  ],
 };

 return (
  <html lang="en" className="scroll-smooth">
   <body className={`${inter.className} overflow-x-hidden`}>
    {/* --- Google Analytics Start --- */}
    <Script
     src="https://www.googletagmanager.com/gtag/js?id=G-42LQ0GCH2L"
     strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
     {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-42LQ0GCH2L');
          `}
    </Script>
    {/* --- Google Analytics End --- */}
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Navbar />
    {children}
    <FloatingContact />
    <PromotionPopup />
    <Footer />
   </body>
  </html>
 );
}
