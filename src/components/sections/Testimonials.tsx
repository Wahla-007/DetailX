"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
 {
  name: "Ahmed Khan",
  location: "DHA Phase 6, Lahore",
  role: "Business Owner",
  image:
   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
  rating: 5,
  text:
   "Absolutely stunned by the quality of work. The team arrived on time and transformed my Land Cruiser. The ceramic coating finish is incredible!",
 },
 {
  name: "Sarah Bilal",
  location: "F-10, Islamabad",
  role: "Architect",
  image:
   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
  rating: 5,
  text:
   "Convenience at its best. I didn't have to leave my office, and they handled everything in the parking lot. My Civic looks brand new.",
 },
 {
  name: "Omer Farooq",
  location: "Clifton, Karachi",
  role: "Car Enthusiast",
  image:
   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100",
  rating: 5,
  text:
   "I am very particular about my cars. DetailX is one of the few services I trust with my detailing needs. Professional, courteous, and detailed.",
 },
];

export default function Testimonials() {
 return (
  <section className="section-padding bg-black relative overflow-hidden">
   {/* Decorative gradient */}
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-10" />

   <div className="container-width">
    <div className="text-center mb-16">
     <span className="text-red-500 tracking-widest uppercase text-sm font-semibold mb-4 block">
      Testimonials
     </span>
     <h2 className="text-3xl md:text-5xl font-bold mb-6">
      What Our Clients Say
     </h2>
     <div className="w-20 h-1 bg-red-600 mx-auto" />
    </div>

    <div className="grid md:grid-cols-3 gap-8">
     {reviews.map((review, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: index * 0.2 }}
       className="bg-neutral-900/80 border border-white/5 p-8 rounded-3xl relative backdrop-blur-sm">
       <Quote className="absolute top-8 right-8 text-neutral-800 w-12 h-12" />

       <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
         <Star
          key={i}
          size={16}
          className={`${
           i < review.rating
            ? "fill-yellow-500 text-yellow-500"
            : "text-gray-600"
          }`}
         />
        ))}
       </div>

       <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
        "{review.text}"
       </p>

       <div className="flex items-center gap-4">
        <div>
         <h4 className="font-bold text-white text-sm">{review.name}</h4>
         <p className="text-xs text-red-500">{review.location}</p>
        </div>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
