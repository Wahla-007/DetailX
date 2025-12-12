"use client";

import { motion } from "framer-motion";
import { Tag, Sparkles, Calendar } from "lucide-react";
import Link from "next/link";

const offers = [
 {
  icon: Tag,
  title: "First Time Offer",
  description:
   "Get 20% OFF your first premium detailing service. Experience the showroom shine.",
  code: "FIRST20",
  color: "from-blue-600 to-cyan-500",
 },
 {
  icon: Sparkles,
  title: "Monthly Membership",
  description:
   "Join our exclusive club for 2 washes per month plus 15% off all add-ons.",
  code: "CLUBVIP",
  color: "from-purple-600 to-pink-500",
 },
 {
  icon: Calendar,
  title: "Weekend Special",
  description:
   "Book for Saturday or Sunday and get a free engine bay cleaning with any full package.",
  code: "WEEKEND",
  color: "from-amber-500 to-orange-500",
 },
];

export default function Offers() {
 return (
  <section className="py-20 relative overflow-hidden bg-neutral-900/50">
   <div className="container-width relative z-10">
    <div className="text-center mb-16">
     <span className="text-red-500 tracking-widest uppercase text-sm font-semibold mb-4 block">
      Special Deals
     </span>
     <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Exclusive Offers & Promotions
     </h2>
     <p className="text-gray-400 max-w-2xl mx-auto">
      Limited time offers to get the best value for your vehicle's care.
     </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
     {offers.map((offer, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: index * 0.1 }}
       className="relative group p-1 rounded-3xl bg-gradient-to-br bg-neutral-800 hover:bg-neutral-700 transition-colors">
       <div
        className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
       />

       <div className="relative h-full bg-neutral-900 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-white/10 transition-colors">
        <div
         className={`w-14 h-14 rounded-full bg-gradient-to-br ${offer.color} flex items-center justify-center mb-6 shadow-lg`}>
         <offer.icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow">
         {offer.description}
        </p>

        <div className="w-full bg-white/5 rounded-lg py-3 px-4 flex items-center justify-between border border-dashed border-white/10 mb-6">
         <span className="text-xs text-gray-500 uppercase tracking-widest">
          Code
         </span>
         <span className="font-mono text-red-400 font-bold">{offer.code}</span>
        </div>

        <Link
         href="#contact"
         className="text-sm font-medium text-white hover:text-red-500 transition-colors flex items-center gap-2">
         Claim Offer <span className="text-lg">→</span>
        </Link>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
