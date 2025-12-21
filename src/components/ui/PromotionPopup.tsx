"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PromotionPopup() {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  // Show popup after 4.5 seconds
  const timer = setTimeout(() => {
   setIsVisible(true);
  }, 4500);

  return () => clearTimeout(timer);
 }, []);

 return (
  isVisible && (
   <AnimatePresence>
    <motion.div
     initial={{ y: 100, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     exit={{ y: 100, opacity: 0 }}
     transition={{ type: "spring", stiffness: 600, damping: 60 }}
     className="fixed bottom-4 left-4 right-4 md:right-auto md:w-[400px] z-50">
     <div className="relative bg-neutral-900/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 shadow-2xl shadow-red-900/20">
      {/* Close Button */}
      <button
       onClick={() => setIsVisible(false)}
       className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-white transition-colors">
       <X size={18} />
      </button>

      <div className="flex items-start gap-4">
       <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 shrink-0">
        <Tag size={24} className="animate-pulse" />
       </div>

       <div className="flex-1">
        <h3 className="font-bold text-lg text-white mb-1">
         Limited Time Offer! 🔥
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
         Get <span className="text-red-400 font-bold">20% OFF</span> on your
         first Full Detailing Package this week. Don't miss out!
        </p>

        <Link
         href="#contact"
         onClick={() => setIsVisible(false)}
         className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-red-500 hover:to-red-600 transition-all shadow-lg shadow-red-900/40 w-full justify-center group">
         Claim Offer Now
         <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
         />
        </Link>
       </div>
      </div>

      {/* Progress Bar (Timer feel) */}
      <div className="absolute bottom-0 left-0 h-1 bg-red-600/30 w-[99%] rounded-b-2xl overflow-hidden">
       <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 10, ease: "linear" }}
        className="h-full bg-red-500"
       />
      </div>
     </div>
    </motion.div>
   </AnimatePresence>
  )
 );
}
