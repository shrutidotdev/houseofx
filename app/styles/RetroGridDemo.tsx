"use client";

import { memo, useEffect, useState } from 'react';
import RetroGrid from "../../components/ui/retro-grid";
import Image from 'next/image';

const VectorIcon = memo(function VectorIcon() {
  return (
    <div className="relative h-8 w-8 shrink-0 md:h-12 md:w-12">
      <Image
        src="/icons/Vector.svg"
        fill
        alt="Vector"
        className="object-contain"
        priority
        sizes="(max-width: 768px) 32px, 48px"
      />
    </div>
  );
});

export function RetroGridDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative -mb-12 flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl">
      {/* Pre-allocated space for RetroGrid to prevent layout shift */}
      <div className="absolute inset-0 backdrop-blur-[1px]" aria-hidden="true">
        {mounted && <RetroGrid />}
      </div>

      {/* Main content with pre-allocated space */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 py-8">
        <h1 
          className="text-center font-bold leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 8.5rem)',
            background: 'linear-gradient(180deg, #19ff4b 0%, #7fff29 50%, #030303 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transform: 'translateZ(0)'
          }}
        >
          Create. Scale. Dominate
        </h1>

        <div className="mt-8 flex w-full items-center justify-center gap-4 md:gap-8">
          <VectorIcon />
          <span className="max-w-2xl text-center font-medium text-base text-gray-200 sm:text-xl md:text-2xl">
            Empowering creators to build and scale their own D2C brands
          </span>
          <VectorIcon />
        </div>
      </div>
    </div>
  );
}

// Ensure component is memoized to prevent unnecessary re-renders
export default memo(RetroGridDemo);