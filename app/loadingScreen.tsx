"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../app/logo";

interface LoadingTransitionProps {
  isVisible?: boolean;
}

const LoadingTransition: React.FC<LoadingTransitionProps> = ({ isVisible = true }) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setVisible(false), 1200); // Increased duration for smooth fade
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [isVisible]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1, // Increased duration for smoother effect
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier easing for a more natural fade
        delay: 1, // Slight delay before fading
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative w-32 h-32 md:w-48 md:h-48">
        <Logo />
      </div>
    </motion.div>
  );
};

export default LoadingTransition;
