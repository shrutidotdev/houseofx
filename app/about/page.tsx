"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

function About() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Expanding Horizons in Creator Commerce
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              "/founderImg/kingRaj.jpg",
              "/products/product1.webp",
              "/products/product2.avif",
              "/products/product3.webp"
            ].map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={src}
                  alt={`Project image ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-xl object-cover h-24 md:h-48 w-full shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Milestones in Brand Innovation
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              "/sample/pic1.jpg",
              "/sample/pic2.jpg",
              "/sample/pic3.jpg",
              "/sample/pic7.jpg"
            ].map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={src}
                  alt={`Achievement image ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-xl object-cover h-24 md:h-48 w-full shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Foundation for the Future
          </p>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-3 text-gray-300"
            >
              {[
                "Creator Network Growth",
                "Successful Brand Launches",
                "Tech Platform Innovation",
                "Market Recognition",
                "Digital Infrastructure",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center text-white text-xs md:text-sm"
                >
                  ✅ {item}
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              "/sample/pic5.jpg",
              "/sample/pic6.jpg"
            ].map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={src}
                  alt={`Milestone image ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-xl object-cover h-24 md:h-48 w-full shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default About;