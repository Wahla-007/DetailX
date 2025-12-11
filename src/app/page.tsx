import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
 return (
  <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
   <Hero />
   <About />
   <Services />
   <Gallery />
   <Contact />
  </main>
 );
}
