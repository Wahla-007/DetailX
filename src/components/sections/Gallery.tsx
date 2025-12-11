"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
 "Bentley After Wash.jpg",
 "Bentley Foamed Up.jpg",
 "Bentley Front.jpg",
 "Bnetley 1.jpg",
 "During wash Bentley DHA.png",
 "full details.webp",
 "Hn=onda covoc 2.jpeg",
 "Polishing Civiv 21 model.jpeg",
 "Suzuki Swift.jpeg",
 "Toyota camry.jpg",
 "Toyota coroll engine bay 2004.jpg",
 "honda city.jpg",
 "honda civic.jpeg",
 "honda covic 3.jpeg",
 "land cruiser.jpeg",
].map((name) => `/gallery/${name}`);

export default function Gallery() {
 const [selectedImage, setSelectedImage] = useState<string | null>(null);

 return (
  <section id="gallery" className="section-padding bg-black">
   <div className="container-width">
    <div className="text-center mb-20">
     <span className="text-red-500 tracking-widest uppercase text-sm font-semibold mb-4 block">
      Our Portfolio
     </span>
     <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Recent Transformations
     </h2>
     <div className="w-20 h-1 bg-red-600 mx-auto" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {images.map((src, index) => (
      <motion.div
       key={index}
       className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group border border-white/10"
       initial={{ opacity: 0, scale: 0.9 }}
       whileInView={{ opacity: 1, scale: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       onClick={() => setSelectedImage(src)}>
       <Image
        src={src}
        alt={`Gallery image ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
       />
       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-medium uppercase tracking-widest border border-white px-4 py-2 hover:bg-white hover:text-black transition-all">
         View
        </span>
       </div>
      </motion.div>
     ))}
    </div>
   </div>

   {/* Lightbox Modal */}
   {selectedImage && (
    <div
     className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
     onClick={() => setSelectedImage(null)}>
     <div className="relative max-w-5xl w-full max-h-[90vh]">
      <Image
       src={selectedImage}
       alt="Selected gallery image"
       width={1200}
       height={800}
       className="object-contain w-full h-full max-h-[90vh]"
      />
      <button
       className="absolute top-[-40px] right-0 text-white hover:text-red-500 transition-colors"
       onClick={() => setSelectedImage(null)}>
       Close
      </button>
     </div>
    </div>
   )}
  </section>
 );
}
