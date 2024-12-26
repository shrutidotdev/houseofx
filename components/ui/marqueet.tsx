"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "normal" | "reverse";
  pauseOnHover?: boolean;
  speed?: number;
}

 const Marqueet = ({
  children,
  direction = "normal",
  pauseOnHover = true,
  speed = 40,
  className,
  ...props
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "reverse" && "animation-direction-reverse"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
export default Marqueet;