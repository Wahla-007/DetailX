"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Check } from "lucide-react";

// Using consistent image paths from gallery
const services = [
 {
  title: "Exterior Car Wash",
  description:
   "Premium mobile car wash service including tire dressing and rim cleaning to remove road grime.",
  duration: "1-2 hrs",
  image: "/gallery/Polishing Civiv 21 model.jpeg",
  features: ["Hand Wash", "Wheel Cleaning", "Tire Shine", "Window Cleaning"],
 },
 {
  title: "Interior Deep Clean",
  description:
   "Complete interior restoration including vacuuming and leather care.",
  duration: " 40 min",
  image: "/gallery/full details.webp",
  features: [
   "Deep Vacuuming",
   "Dashboard Cleaning",
   "Leather Conditioning",
   "Odor Removal",
  ],
 },
 {
  title: "Full Deep Clean",
  description:
   "The ultimate package. Complete exterior and interior detailing service.",
  duration: "2 hrs",
  image: "/gallery/Bentley After Wash.jpg",
  features: [
   "Exterior Wash & Wax",
   "Interior Deep Clean",
   "Engine Bay Wash",
   "Clay Bar Treatment",
  ],
 },
];

export default function Services() {
 return (
  <section
   id="services"
   className="section-padding bg-black relative overflow-hidden">
   <div className="container-width">
    <div className="text-center mb-20">
     <span className="text-red-500 tracking-widest uppercase text-sm font-semibold mb-4 block">
      Our Services
     </span>
     <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Autodetailing Services
     </h2>
     <div className="w-20 h-1 bg-red-600 mx-auto" />
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
     {services.map((service, index) => (
      <motion.div
       key={index}
       className="group rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-red-500/50 transition-all duration-500"
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.2 }}>
       {/* Image Container */}
       <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10" />
        <Image
         src={service.image}
         alt={service.title}
         fill
         className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
       </div>

       {/* Content */}
       <div className="p-8 relative z-20 -mt-12">
        <div className="inline-flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
         <Clock size={12} />
         {service.duration}
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">
         {service.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
         {service.description}
        </p>

        <ul className="space-y-3 mb-8">
         {service.features.map((feature, idx) => (
          <li
           key={idx}
           className="flex items-center gap-3 text-sm text-gray-300">
           <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
            <Check size={12} />
           </div>
           {feature}
          </li>
         ))}
        </ul>

        <Link href="#contact" className="w-full btn-primary rounded-xl py-4">
         Book Now
        </Link>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
