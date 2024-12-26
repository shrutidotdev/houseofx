"use client";

import React from "react";
import ShowCasingInvestors from "../components/showcasingInvestors";
import { investors } from "../data/investors";
import { motion } from "framer-motion";

const OurInvestors = () => {
  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Investors</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Meet the visionary investors backing House of X in our journey to transform ideas into thriving businesses.
          </p>
        </div>
        
        <ShowCasingInvestors investors={investors} />
      </motion.div>
    </div>
  );
};

export default OurInvestors;

