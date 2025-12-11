import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
 title: "DetailX - Premium Mobile Car Detailing",
 description:
  "Professional mobile car detailing at your doorstep. We bring the shine to you.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" className="scroll-smooth">
   <body className={inter.className}>
    <Navbar />
    {children}
    <Footer />
   </body>
  </html>
 );
}
