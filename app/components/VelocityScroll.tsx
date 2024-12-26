"use client";

import React from "react";
import { ParallaxText } from "./ParallaxText";

interface VelocityScrollProps {
  text: string;
  defaultVelocity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function VelocityScroll({
  text,
  defaultVelocity = 5,
  className,
  style,
}: VelocityScrollProps) {
  return (
    <div className="absolute inset-0 flex items-center">
      <div className="w-full">
        <ParallaxText baseVelocity={defaultVelocity} className={className} style={style}>
          {text}
        </ParallaxText>
        <ParallaxText baseVelocity={-defaultVelocity} className={className} style={style}>
          {text}
        </ParallaxText>
      </div>
    </div>
  );
}