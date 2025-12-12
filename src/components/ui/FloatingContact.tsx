"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingContact() {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   // Show after scrolling down a bit (e.g., 100px)
   setIsVisible(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const whatsappNumber = "923252337074";
 const phoneNumber = "03252337074";

 return (
  <AnimatePresence>
   {isVisible && (
    <motion.div
     initial={{ y: 100, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     exit={{ y: 100, opacity: 0 }}
     className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden flex gap-3 bg-gradient-to-t from-black via-black/90 to-transparent pb-8 pt-6">
     <a
      href={`tel:${phoneNumber}`}
      className="flex-1 bg-neutral-900 border border-white/10 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-lg">
      <Phone size={20} className="fill-white" />
      <span>Call Now</span>
     </a>
     <a
      href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20discuss%20about%20your%20services.%20Are%20you%20available%20for%20appointment?`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 bg-green-500 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20">
      <MessageCircle size={20} className="fill-white" />
      <span>WhatsApp</span>
     </a>
    </motion.div>
   )}
  </AnimatePresence>
 );
}
