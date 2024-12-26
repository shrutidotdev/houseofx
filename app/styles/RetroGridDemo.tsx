"use client";

import RetroGrid from "../../components/ui/retro-grid";
import Image from 'next/image'

export function RetroGridDemo() {
  return (
    <div className="relative bottom-12 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl ">
      <div className="absolute inset-0">
        <RetroGrid />
      </div>
      <span className="relative z-10 bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] bg-clip-text text-center text-[6rem] lg:text-[8.5rem] font-bold leading-none tracking-tighter text-transparent">
      Create. Scale. Dominate        
      </span>

    <div className="relative flex items-center justify-center w-full  px-8 mt-8">
      <div className="relative w-8 h-8 md:w-12 md:h-12">
          <Image
            src="/icons/Vector.svg"
            fill
            alt="Vector"
            className="object-contain"
          />
        </div>
        <span className="sm:text-xl md:text-2xl text-center mx-4 md:mx-8 z-10 text-gray-200">Empowering creators to build and scale their own D2C brands</span>
        <div className="relative w-8 h-8 md:w-12 md:h-12">
          <Image
            src="/icons/Vector.svg"
            fill
            alt="Vector"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}