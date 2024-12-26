// {/* <RetroGridDemo>
// <div className="w-full bg-gradient-to-b from-black/95 via-black/90 to-black/80 text-white min-h-screen flex flex-col items-center justify-center relative">
//   {/* Dynamic background effects */}
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.08),transparent_70%)] animate-pulse" />
//   <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent_10%,transparent_90%,rgba(0,0,0,0.8))]" />
  
//   {/* Animated orbs */}
//   <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] animate-float" />
//   <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-float-delayed" />
//   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-900/20 rounded-full blur-[120px] animate-pulse-slow" />
  
//   <section className="relative tracking-widest px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
//     <div className="max-w-7xl mx-auto relative">
//       {/* Decorative lines */}
//       <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-transparent via-green-500/30 to-transparent" />
//       <div className="absolute -right-4 top-0 w-1 h-32 bg-gradient-to-b from-transparent via-green-500/30 to-transparent" />
      
//       <h1 className="flex flex-col items-center justify-center gap-8 mb-16 relative">
//         <div className="relative">
//           <span className="block text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight
//             bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-400
//             [text-shadow:0_0_40px_rgba(0,255,0,0.2)]
//             animate-fade-in">
//             Welcome to HOUSE OF
//           </span>
//           <div className="absolute -inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
//         </div>
        
//         <div className="relative group">
//           <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-green-500/10 to-green-500/20 rounded-full blur-xl group-hover:bg-gradient-to-r group-hover:from-green-500/30 group-hover:via-green-500/20 group-hover:to-green-500/30 transition-all duration-500" />
//           <Image 
//             src={logo} 
//             alt="House of X" 
//             width={140}
//             height={140}
//             className="z-10 object-contain relative transform group-hover:scale-110 transition-transform duration-500
//               drop-shadow-[0_0_25px_rgba(0,255,0,0.3)]"
//             priority
//           />
//         </div>
//       </h1>
      
//       <p className="text-xl sm:text-2xl mb-16 max-w-2xl mx-auto relative
//         text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-100
//         [text-shadow:0_0_20px_rgba(0,255,0,0.15)]">
//         <span className="backdrop-blur-sm py-4 px-6 rounded-lg bg-black/10 block">
//           Empowering creators to build and scale their own D2C brands.
//         </span>
//       </p>

//       <div className="relative z-10 transform hover:scale-105 transition-all duration-300">
//         <div className="absolute -inset-4 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 rounded-lg blur-xl" />
//         <Link 
//           href="https://wa.me/917760930987?text=Thank%20you%20for%20reaching%20out!%20We're%20here%20to%20assist%20you.%20Please%20schedule%20the%20meeting%20at%20your%20convenience,%20and%20our%20team%20will%20guide%20you%20through%20the%20process.%0A%0AHere's%20a%20link%20to%20schedule%20a%20meeting%20with%20our%20team:%20https://calendly.com/shrutisinghz/walk-through.%20Just%20pick%20a%20time%20that%20works%20for%20you,%20and%20we'll%20take%20care%20of%20the%20rest!"
//           className="inline-block group relative"
//         >
//           <ShimmerButtonDemo>
//             <span className="text-center tracking-wider whitespace-pre-wrap text-base sm:text-lg font-medium leading-none text-white
//               group-hover:text-green-200 transition-colors duration-300">
//               Schedule a Call
//             </span>
//           </ShimmerButtonDemo>
//         </Link>
//       </div>
//     </div>
//   </section>

//   {/* Enhanced border effects */}
//   <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
//   <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
// </div>
// </RetroGridDemo> */}



// use-outside-click.ts
// import React, { useEffect } from "react";

// export const useOutsideClick = (
//   ref: React.RefObject<HTMLDivElement>,
//   callback: (event: MouseEvent | TouchEvent) => void // Specify the expected argument type
// ) => {
//   useEffect(() => {
//     const listener = (event: MouseEvent | TouchEvent) => { // Specify the event type
//       if (!ref.current || ref.current.contains(event.target as Node)) { // Assert event.target as Node
//         return;
//       }
//       callback(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, callback]);
// };
