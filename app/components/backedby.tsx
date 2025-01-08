'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import LightSpeed from '../../public/brands/lightspeed.webp'

export default function BackedByLight() {
  return (
    <div className="flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-4xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center "
        >
          <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-white/60" />
          <h2 className="text-xl font-medium text-white">Backed By</h2>
          <div className="h-px w-20 bg-white/60" />
        </div>
          
          <div className="mb-6 sm:mb-10 flex justify-center">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20">
                <Image
                src={LightSpeed}
                height={200}
                width={200}
                alt="Lightspeed Logo"
                />
          
              </div>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight">
                Lightspeed
              </span>
            </div>
          </div>
          
          <div className="space-y-1 sm:space-y-2 text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
              Lightspeed Venture Partners
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/60">
              and others
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

