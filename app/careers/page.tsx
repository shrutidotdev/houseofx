'use client';
import React from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';

const Career = () => {

  const formUrl = 'https://docs.google.com/forms/d/1bXUlWr3cbYGZj34p9EH_c72uqF4rK6dnnj83jD6a8Rw/viewform?edit_requested=true';

  return (
    <div className="w-full min-h-screen pt-20 flex flex-col items-center justify-center gap-4">
      <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303]"
          >
            CAREERS AT HOUSE OF X
      </motion.h1>

    <Link 
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-7 py-2 rounded-full bg-[#5bc351] text-white font-semibold hover:from-green-600 hover:to-green-800 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
        >
          Open Application Form
        </motion.button>
    </Link>

      
    </div>
  );
};

export default Career;