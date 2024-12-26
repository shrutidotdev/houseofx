"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const threshold = 1 / data.length;
    const newIndex = Math.floor(latest / threshold);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < data.length) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <div className="w-full bg-black font-sans" ref={containerRef}>
      {/* Hero Section with Animated Grid */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303]"
          >
            OUR JOURNEY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Transforming Creator Commerce, One Brand at a Time
          </motion.p>
        </div>
      </section>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-32">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className={cn(
              "flex justify-start pt-20 md:pt-40 md:gap-10",
              index === activeIndex ? "opacity-100" : "opacity-50"
            )}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="h-4 w-4 rounded-full bg-white/90 shadow-lg" />
              </motion.div>
              <h3 className="hidden md:block text-xl md:pl-24 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-3xl mb-6 text-left font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303]">
                {item.title}
              </h3>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05)]"
              >
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        {/* Animated Timeline Line */}
        <div className="absolute md:left-8 left-8 top-0 h-full w-[3px] overflow-hidden">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303]"
          />
        </div>
      </div>
    </div>
  );
};