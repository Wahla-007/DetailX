"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
 { name: "Home", href: "#home" },
 { name: "About", href: "#about" },
 { name: "Services", href: "#services" },
 { name: "Gallery", href: "#gallery" },
 { name: "Contact", href: "#contact" },
];

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
  <nav
   className={cn(
    "fixed top-0 w-full z-50 transition-all duration-300",
    scrolled ? "py-3 glass" : "py-6 bg-transparent"
   )}>
   <div className="container mx-auto px-6 flex items-center justify-between">
    {/* Logo */}
    <Link href="/" className="text-2xl font-bold tracking-wider">
     Wash <span className="text-red-500">&</span> Detail
    </Link>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-8">
     {navLinks.map((link) => (
      <Link
       key={link.name}
       href={link.href}
       className="text-sm uppercase tracking-widest hover:text-red-500 transition-colors relative group">
       {link.name}
       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
      </Link>
     ))}
     <Link
      href="#contact"
      className="btn-primary bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium tracking-wide transition-all transform hover:scale-105 shadow-lg shadow-red-600/20">
      Book Now
     </Link>
    </div>

    {/* Mobile Menu Button */}
    <button
     className="md:hidden text-white p-1"
     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
     {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
   </div>

   {/* Mobile Menu */}
   <AnimatePresence>
    {mobileMenuOpen && (
     <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      <div className="flex flex-col p-6 gap-4">
       {navLinks.map((link) => (
        <Link
         key={link.name}
         href={link.href}
         className="text-lg uppercase tracking-wider hover:text-red-500 transition-colors"
         onClick={() => setMobileMenuOpen(false)}>
         {link.name}
        </Link>
       ))}
       <Link
        href="#contact"
        className="bg-red-600 text-center py-3 rounded-md font-bold uppercase tracking-wider mt-2"
        onClick={() => setMobileMenuOpen(false)}>
        Book Now
       </Link>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </nav>
 );
}
