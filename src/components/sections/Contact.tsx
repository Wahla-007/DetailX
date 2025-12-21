"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
 const [loading, setLoading] = useState(false);
 const [success, setSuccess] = useState(false);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;
  const formData = new FormData(form);
  const scriptURL =
   "https://script.google.com/macros/s/AKfycby2aMBjqBf782BTMwWXUncN3d0EEvIiDJmAh31P_8YoBsqJolUWjhdZ3zPABald8Sg/exec";

  try {
   await fetch(scriptURL, { method: "POST", body: formData, mode: "no-cors" });
   setSuccess(true);
   form.reset();
   setTimeout(() => setSuccess(false), 5000);
  } catch (error) {
   console.error("Error!", error);
   alert("Something went wrong. Please try calling us directly.");
  } finally {
   setLoading(false);
  }
 };

 return (
  <section id="contact" className="section-padding bg-neutral-900/30 relative">
   <div className="container-width">
    <div className="text-center mb-20">
     <span className="text-red-500 tracking-widest uppercase text-sm font-semibold mb-4 block">
      Get In Touch
     </span>
     <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Book Your Appointment
     </h2>
     <div className="w-20 h-1 bg-red-600 mx-auto" />
    </div>

    <div className="grid lg:grid-cols-2 gap-16">
     {/* Contact Info */}
     <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8">
      <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

      <div className="flex items-start gap-4">
       <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 shrink-0">
        <Phone size={20} />
       </div>
       <div>
        <h4 className="font-semibold text-lg">Call Us</h4>
        <a
         href="tel:+923252337074"
         className="text-gray-400 hover:text-white transition-colors">
         +92 325 2337074
        </a>
       </div>
      </div>

      <div className="flex items-start gap-4">
       <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 shrink-0">
        <Mail size={20} />
       </div>
       <div>
        <h4 className="font-semibold text-lg">Email Us</h4>
        <a
         href="mailto:info@WashandDetail.com"
         className="text-gray-400 hover:text-white transition-colors">
         info@WashandDetail.com
        </a>
       </div>
      </div>

      <div className="flex items-start gap-4">
       <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 shrink-0">
        <MapPin size={20} />
       </div>
       <div>
        <h4 className="font-semibold text-lg">Service Area</h4>
        <p className="text-gray-400">
         Mobile Service in Lahore, Islamabad, Rawalpindi, Karachi & Faisalabad.
        </p>
       </div>
      </div>

      <div className="p-8 bg-neutral-900 rounded-2xl border border-white/5 mt-12">
       <h4 className="font-bold text-lg mb-4 text-red-500">
        Why Choose WashandDetail?
       </h4>
       <ul className="space-y-3 text-gray-400">
        <li className="flex items-center gap-2">
         ✓ Professional certified detailers
        </li>
        <li className="flex items-center gap-2">
         ✓ Eco-friendly premium products
        </li>
        <li className="flex items-center gap-2">✓ Satisfaction guaranteed</li>
        <li className="flex items-center gap-2">✓ Flexible scheduling</li>
       </ul>
      </div>
     </motion.div>

     {/* Contact Form */}
     <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-black/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
       <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
         <label className="text-sm font-medium text-gray-400">Your Name</label>
         <input
          type="text"
          name="name"
          required
          className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
         />
        </div>
        <div className="space-y-2">
         <label className="text-sm font-medium text-gray-400">
          Phone Number
         </label>
         <input
          type="tel"
          name="phone"
          required
          className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
         />
        </div>
       </div>

       <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">
         Email Address
        </label>
        <input
         type="email"
         name="email"
         required
         className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
        />
       </div>

       <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">
         Service Type
        </label>
        <select
         name="service"
         required
         className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors">
         <option value="">Select a service</option>
         <option value="Exterior Car Wash">Exterior Car Wash</option>
         <option value="Interior Deep Clean">Interior Deep Clean</option>
         <option value="Full Deep Clean">Full Deep Clean</option>
         <option value="Custom Service">Custom Service</option>
        </select>
       </div>

       <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">
         Your Address
        </label>
        <textarea
         name="address"
         required
         rows={3}
         className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none"
        />
       </div>

       <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">
         Additional Notes
        </label>
        <textarea
         name="notes"
         rows={3}
         className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none"
        />
       </div>

       <button
        type="submit"
        disabled={loading}
        className={cn(
         "w-full btn-primary py-4 text-lg rounded-xl",
         loading && "opacity-50 cursor-not-allowed"
        )}>
        {loading ? <Loader2 className="animate-spin" /> : "Request Booking"}
       </button>

       {success && (
        <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg text-center font-medium">
         Message sent successfully! We will contact you shortly.
        </motion.div>
       )}
      </form>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
