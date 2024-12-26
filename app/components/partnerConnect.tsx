import React from 'react';
import { ArrowRight, Handshake  } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function PartnerConnect() {
  return (
    <section className="relative flex items-center overflow-hidden pb-20 ">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Connect with
              <span className="block bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] bg-clip-text  text-transparent font-bold text-center">Global Partners</span>
            </h1>
            <p className="text-xl text-gray-300">
              Join our network of vendors, manufacturers, and service providers to expand your business globally.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <Link href="/learnmore" className="w-full sm:w-auto">
              <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:bg-green-600 hover:text-white  shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span className="text-lg font-semibold">Get Started</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            
            <Link href="/learnmore" className="w-full sm:w-auto">
              <button className="w-full px-6 py-3 border border-lime-500 rounded-full bg-black text-white text-lg font-semibold hover:from-green-600 hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:bg-green-800 hover:text-white hover:border-none  shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span className="text-lg font-semibold">Join Now</span>
                <Handshake size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              </button>
            </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4 animate-float">
            <Image
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400"
              alt="Business collaboration"
              width={400}
              height={400}
              className="rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400"
              alt="Global networking"
              width={400}
              height={400}
              className="rounded-lg transform translate-y-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerConnect;