// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export interface ImageData  {
//   src: string;
//   alt: string;
// }

// export function ImageCard({ src, alt }: ImageData ) {
//   return (
//     <motion.div 
//       className="relative flex-shrink-0 w-[400px] h-[500px] snap-center"
//       whileHover={{ scale: 1.02 }}
//       transition={{ duration: 0.2 }}
//     >
//       <div className="absolute inset-0 rounded-lg overflow-hidden">
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           className="object-cover"
//           priority
//           width={500} 
//           height={500}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
//       </div>
//     </motion.div>
//   );
// }