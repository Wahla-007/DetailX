import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Offers from "@/components/sections/Offers";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
 return (
  <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
   <Hero />
   <Offers />
   <About />
   <Services />
   <Gallery />
   <Testimonials />
   <Contact />
  </main>
 );
}
