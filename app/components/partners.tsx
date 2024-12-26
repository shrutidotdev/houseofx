// 'use client'

// import { motion } from "framer-motion";
// import Marquee from "../../components/ui/marquee";
// import { investors } from "../data/investors";
// import { InvestorCard } from "./investor-card";
// import { cn } from "@/lib/utils";

// const firstRow = investors.slice(0, Math.ceil(investors.length / 2));
// const secondRow = investors.slice(Math.ceil(investors.length / 2));

// export default function InvestorInvestors() {
//   return (
//     <div className="relative overflow-hidden min-h-screen bg-black">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="w-96 h-96 animate-pulse rounded-full bg-green-500/20 blur-[120px]" />
//         <div className="absolute w-72 h-72 animate-pulse rounded-full bg-emerald-800 blur-[90px]" />
//       </div>
      
//       {/* Main content */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative flex flex-col items-center justify-center p-8"
//       >
//         <div className="relative w-full max-w-7xl">
//           <div className="text-center mb-12">
//             <h2 className={cn(
//               "text-4xl md:text-5xl font-bold mb-4",
//               "text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] bg-clip-text"
//             )}>
//               Meet Our Investors
//             </h2>
//             <h3 className="text-lg md:text-xl text-gray-400">
//               Meet the visionaries behind House of X&apos;s success.
//             </h3>
//           </div>
          
//           <div className="relative flex mt-10 w-full flex-col items-center justify-center overflow-hidden rounded-2xl shadow-2xl">
//             <Marquee pauseOnHover className="[--duration:30s]">
//               {firstRow.map((investor) => (
//                 <InvestorCard key={investor.name} {...investor} />
//               ))}
//             </Marquee>
//             <Marquee reverse pauseOnHover className="[--duration:25s]">
//               {secondRow.map((investor) => (
//                 <InvestorCard key={investor.name} {...investor} />
//               ))}
//             </Marquee>
            
//             {/* Gradient overlays */}
//             <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/90 to-transparent"></div>
//             <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/90 to-transparent"></div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

