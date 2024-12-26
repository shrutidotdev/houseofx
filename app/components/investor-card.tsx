// import Image from "next/image";
// import { cn } from "@/lib/utils";

// interface InvestorCardProps {
//   img: string;
//   name: string;
//   company: string;
// }

// function InvestorCard({ img, name, company }: InvestorCardProps) {
//   return (
//     <figure
//       className={cn(
//         "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <Image 
//           className="h-12 w-12 rounded-full object-cover" 
//           alt={name} 
//           src={img}
//           width={48}
//           height={48}
//         />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs text-gray-500 dark:text-gray-400">
//             {company}
//           </p>
//         </div>
//       </div>
//     </figure>
//   );
// };
// export default InvestorCard;

