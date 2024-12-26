"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Investor } from "../data/investors";

interface ShowCasingInvestorsProps {
  investors: Investor[];
}

const ShowCasingInvestors = ({ investors }: ShowCasingInvestorsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {investors.map((investor, index) => (
        <InvestorCard key={investor.name} investor={investor} index={index} />
      ))}
    </div>
  );
};

interface InvestorCardProps {
  investor: Investor;
  index: number;
}

const InvestorCard = ({ investor, index }: InvestorCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-zinc-900 border border-zinc-800 hover:border-green-500/40 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={investor.img}
            alt={investor.name}
            width={400}
            height={400}
            className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
            priority={index < 4}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <motion.div 
        className="p-6 border-t border-zinc-800/50 bg-black/90 backdrop-blur-sm relative z-10"
        initial={false}
        animate={{
          height: isHovered ? "auto" : "auto",
          opacity: 1
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            {investor.name}
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="w-5 h-5 text-green-400" />
          </motion.div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
            <Building2 className="w-4 h-4 mr-2 text-green-500" />
            <span className="font-medium text-md group-hover:text-green-400 transition-all duration-300">
              {investor.company}
            </span>
          </div>
          
          <div className="flex items-center text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
            <Briefcase className="w-4 h-4 mr-2 text-green-500/70" />
            <span className="text-sm">{investor.role}</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-zinc-800/50"
        >
          <div className="flex gap-2">
            <Button
              variant="secondary"
              className="bg-green-500/10 text-green-400 hover:bg-green-500/20"
              size="sm"
            >
              View Profile
            </Button>
            <Button
              variant="secondary"
              className="bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50"
              size="sm"
            >
              Connect
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ShowCasingInvestors;

