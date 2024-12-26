"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import  {investors}  from "../data/investors";
import InvestorCard from "../components/investor-card";
import { cn } from "@/lib/utils";

const firstRow = investors.slice(0, Math.ceil(investors.length / 2));
const secondRow = investors.slice(Math.ceil(investors.length / 2));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function InvestorsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background gradients */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] animate-pulse rounded-full bg-green-500/10 blur-[150px]" />
        <div className="absolute w-[400px] h-[400px] animate-pulse rounded-full bg-lime-800/20 blur-[120px]" />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center justify-center px-6 py-24"
      >
        <div className="relative w-full max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <h1 className={cn(
                "text-4xl md:text-6xl font-bold",
                "text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] bg-clip-text"
              )}>
                Our Investors
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Meet the visionaries who believe in our mission and help drive our success forward.
            </p>
          </motion.div>
          
          <div className="relative mt-16 w-full flex flex-col items-center justify-center overflow-hidden rounded-3xl">
            <Marquee pauseOnHover className="[--duration:40s]">
              {firstRow.map((investor) => (
                <InvestorCard key={investor.name} {...investor} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:35s]">
              {secondRow.map((investor) => (
                <InvestorCard key={investor.name} {...investor} />
              ))}
            </Marquee>
            
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/80 to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}