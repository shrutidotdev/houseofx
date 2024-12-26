"use client";

import  Marqueet from "@/components/ui/marquee";
import Image from 'next/image';

function MarqueeText() {
  const texts = ["LAUNCH", "BUILD", "SCALE", "HOUSE OF X"];
  const texts1 = ["EMPOWERMENT", "TRANSFORMATION", "POTENTIAL"];
  // 96e041  65cf34
  
  return (

    <>
 <div className="w-full relative py-6">
  <div className="w-full bg-[#96e041] bg-opacity-100 rotate-[-2.422deg] absolute top-10 sm:top-10 md:top-10 lg:top-10 left-0 sm:left-0 md:left-0 lg:left-0">
    <Marqueet className="py-3" speed={40}>
      {texts1.map((text, idx) => (
        <div key={idx} className="mx-4 sm:mx-8 text-black text-sm sm:text-lg flex items-center gap-10 sm:gap-4">
        <Image
        src={"/icons/Vector (1).svg"}
        width={16}
        height={14}
        alt="vector"
        />
        <span>{text}</span>
        <Image
        src={"/icons/Vector (1).svg"}
        width={16}
        height={14}
        alt="vector"
        />
      </div>
      ))}
    </Marqueet>
  </div>
  <div className="w-full bg-[#65cf34] bg-opacity-100 rotate-[2.422deg] absolute top-10 sm:top-10 md:top-10 lg:top-10 left-0 sm:left-0 md:left-0 lg:left-0">
    <Marqueet className="py-3" speed={40}>
      {texts.map((text, idx) => (
        <div key={idx} className="mx-4 sm:mx-8 text-black text-sm sm:text-lg flex items-center gap-2 sm:gap-4">
          <Image
          src={"/icons/Vector (1).svg"}
          width={16}
          height={14}
          alt="vector"
          />
          <span>{text}</span>
          <Image
          src={"/icons/Vector (1).svg"}
          width={16}
          height={14}
          alt="vector"
          />
        </div>
      ))}
    </Marqueet>
  </div>
</div>

    </>
  );
}
export default MarqueeText;