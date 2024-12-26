"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InvestorCardProps {
  img: string;
  name: string;
  company: string;
}

export default function InvestorCard({ img, name, company }: InvestorCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <figure
        className={cn(
          "relative w-[20rem] cursor-pointer overflow-hidden rounded-xl border p-6 mx-3",
          "backdrop-blur-sm backdrop-filter",
          "border-green-400/20 bg-green-500/[.03] hover:bg-green-500/[.08]",
          "transition-colors duration-300"
        )}
      >
        <div className="flex items-center gap-6">
          <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-green-500/20">
            <Image 
              className="h-full w-full object-cover" 
              alt={name} 
              src={img}
              width={64}
              height={64}
              quality={95}
            />
          </div>
          <div className="flex flex-col">
            <figcaption className="text-lg font-semibold text-white/90">
              {name}
            </figcaption>
            <p className="mt-1 text-sm text-green-400/80">
              {company}
            </p>
          </div>
        </div>
      </figure>
    </motion.div>
  );
}