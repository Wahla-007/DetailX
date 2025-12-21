import Link from "next/link";

export default function Footer() {
 return (
  <footer className="bg-neutral-900 border-t border-neutral-800 py-12">
   <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
     <div className="text-2xl font-bold tracking-wider">
      <Link href="/" className="text-2xl font-bold tracking-wider">
       Wash <span className="text-red-500">&</span> Detail
      </Link>
     </div>

     <div className="text-gray-400 text-sm">
      © {new Date().getFullYear()} WashandDetail. All rights reserved.
     </div>

     <div className="flex gap-6">
      <Link
       href="#"
       className="text-gray-400 hover:text-white transition-colors">
       Instagram
      </Link>
      <Link
       href="#"
       className="text-gray-400 hover:text-white transition-colors">
       Facebook
      </Link>
     </div>
    </div>
   </div>
  </footer>
 );
}
