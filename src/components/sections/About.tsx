"use client";

import { motion } from "framer-motion";
import { Home, Calendar, Shield, Sparkles } from "lucide-react";

const stats = [
 { label: "Happy Customers", value: "500+" },
 { label: "Average Rating", value: "5.0★" },
];

const features = [
 {
  icon: Home,
  title: "Mobile Service",
  description: "We come to your home or office",
 },
 {
  icon: Calendar,
  title: "Flexible Scheduling",
  description: "Book at your convenience",
 },
 {
  icon: Shield,
  title: "Quality Guaranteed",
  description: "100% satisfaction promise",
 },
 {
  icon: Sparkles,
  title: "Premium Products",
  description: "Professional-grade materials",
 },
];

export default function About() {
 return (
  <section
   id="about"
   className="section-padding bg-neutral-900/30 relative overflow-hidden">
   <div className="container-width">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
     <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      <span className="text-red-500 tracking-widest uppercase text-sm font-semibold mb-4 block">
       About WashandDetail
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
       We Should Be Your Top Choice
      </h2>
      <div className="w-20 h-1 bg-red-600 mb-8" />

      <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
       <p>
        <strong className="text-white">WashandDetail</strong> brings
        professional car washing and detailing services right to your doorstep.
        No need to drive to a car wash or wait in long lines. We come equipped
        with everything needed to make your vehicle look showroom fresh.
       </p>
       <p>
        Our experienced team uses premium products and proven techniques to
        deliver exceptional results every time. Whether it's your daily driver
        or your weekend pride and joy, we treat every vehicle with the care it
        deserves.
       </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-12">
       {stats.map((stat, index) => (
        <div
         key={index}
         className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
         <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
         <div className="text-red-500 text-sm font-medium uppercase tracking-wider">
          {stat.label}
         </div>
        </div>
       ))}
      </div>
     </motion.div>

     <div className="grid sm:grid-cols-2 gap-6">
      {features.map((feature, index) => (
       <motion.div
        key={index}
        className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}>
        <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 text-red-500">
         <feature.icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-gray-400 text-sm">{feature.description}</p>
       </motion.div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}
