"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
}

export function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <motion.div 
      className="relative w-full h-full rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      
      {/* Hover Effect */}
      <motion.div 
        className="absolute inset-0 bg-black/40 opacity-0 transition-opacity"
        whileHover={{ opacity: 1 }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold tracking-tight">{alt}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}