"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
 return (
  <section
   id="home"
   className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
   {/* Dynamic Background Elements */}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black z-10" />

   <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-blob" />
   <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />

   <div className="container-width text-center z-10">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}>
     <span className="inline-block px-4 py-1 mb-6 text-sm font-medium tracking-widest text-red-500 uppercase bg-red-500/10 rounded-full border border-red-500/20 backdrop-blur-sm">
      Premium Mobile Car Detailing
     </span>

     <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
      MOBILE DETAILING
      <br />
      <span className="text-gradient-red">IN YOUR CITY</span>
     </h1>

     <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed text-balance">
      Professional mobile car detailing delivered to your doorstep in{" "}
      <span className="text-white font-medium">
       Lahore, Islamabad, Rawalpindi, Karachi & Faisalabad
      </span>
      . We bring the showroom shine to you.
     </p>

     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link href="#contact" className="btn-primary group">
       Book Now
       <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link
       href="#services"
       className="px-8 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-all">
       View Services
      </Link>
     </div>
    </motion.div>
   </div>

   <div className="absolute z-[100] bottom-1 left-1/2 -translate-x-1/2 text-gray-500 block animate-float">
    <div className="flex flex-col items-center gap-2">
     <span className="text-xs uppercase tracking-widest">Scroll Down</span>
     <ChevronDown className="w-5 h-5" />
    </div>
   </div>
  </section>
 );
}
