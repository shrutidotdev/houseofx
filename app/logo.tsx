"use client";

import React from "react";
import { motion } from "framer-motion";

export const Logo: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* First stroke of the X - top left to bottom right */}
      <motion.path
        d="M20 20 L80 80"
        stroke="#2AFD65"
        strokeWidth="16"
        strokeLinecap="square"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      {/* Second stroke of the X - top right to bottom left */}
      <motion.path
        d="M80 20 L20 80"
        stroke="#2AFD65"
        strokeWidth="16"
        strokeLinecap="square"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
};

export default Logo;
