"use client";

import React, { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../app/logo";

interface LoadingTransitionProps {
  isVisible?: boolean;
  onTransitionComplete?: () => void;
}

const TRANSITION_DURATION = 1200; // Duration in milliseconds
const FADE_DURATION = 1;

const LoadingTransition: React.FC<LoadingTransitionProps> = memo(({ 
  isVisible = true,
  onTransitionComplete 
}) => {
  const [visible, setVisible] = useState(isVisible);
  const [isClient, setIsClient] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setVisible(false);
        onTransitionComplete?.();
      }, TRANSITION_DURATION);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onTransitionComplete]);

  // Don't render anything during SSR
  if (!isClient) return null;

  // Early return if not visible
  if (!visible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loading-transition"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: FADE_DURATION,
          ease: [0.4, 0, 0.2, 1],
          delay: FADE_DURATION,
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        style={{
          willChange: 'opacity',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        <motion.div 
          className="relative w-32 h-32 md:w-48 md:h-48"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          <Logo />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

LoadingTransition.displayName = 'LoadingTransition';

export default LoadingTransition;