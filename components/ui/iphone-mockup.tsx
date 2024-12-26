"use client";

import { cn } from "@/lib/utils";
import { Volume } from "lucide-react";
import { useState, memo, useEffect } from "react";

interface IPhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}
const Time = memo(() => {
  // State to store current time
  const [currentTime, setCurrentTime] = useState("");

  // Effect to update time every second
  useEffect(() => {

    const formatTime = () => {
      return new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        hourCycle: 'h12'
      }).toLowerCase();
    };

    setCurrentTime(formatTime());

    const intervalId = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if(!currentTime) return <span>--:--</span>

  return <span className="text-white font-bold">{currentTime}</span>;
});

Time.displayName = "Time";

const StatusBar = memo(() => (
  <div className=" absolute top-0 z-20 flex w-full justify-between px-5 pt-2 text-xs ">
    <Time />
    <div className="flex items-center gap-1">
      <span className="h-3 w-3 rounded-full bg-current" />
      <span className="h-3 w-3 rounded-full bg-current" />
      <span className="h-3 w-3 rounded-full bg-current" />
      <div className="ml-1 h-4 w-4 rounded-full bg-black" /> {/* Dynamic Island */}
    </div>
  </div>
));

StatusBar.displayName = "StatusBar";

const SideButtons = memo(() => (
  <div className="absolute -left-[14px] top-24 flex flex-col gap-4">
    <Volume className="h-12 w-2 text-neutral-800" />
    <Volume className="h-12 w-2 text-neutral-800" />
    <div className="mt-4 h-16 w-2 rounded-sm bg-neutral-800" /> {/* Action button */}
  </div>
));

SideButtons.displayName = "SideButtons";

export function IPhoneMockup({ children, className }: IPhoneMockupProps) {
  const [isPowerPressed, setIsPowerPressed] = useState(false);
  const [isScreenOn, setIsScreenOn] = useState(true);

  const handlePowerClick = () => {
    setIsPowerPressed(true);
    setIsScreenOn(!isScreenOn);
    setTimeout(() => setIsPowerPressed(false), 200);
  };

  return (
    <div className={cn("relative mx-auto w-[300px]", className)}>
      <div className="relative rounded-[3.5rem] border-[12px] border-black bg-black shadow-xl">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-0 z-30 h-7 w-32 -translate-x-1/2 rounded-b-3xl bg-black" />
        <SideButtons />
        <button
          onClick={handlePowerClick}
          className={cn(
            "absolute -right-[14px] top-24 h-12 w-2 rounded-sm bg-neutral-800 transition-transform",
            isPowerPressed && "scale-95"
          )}
        />
        <div 
          className={cn(
            "relative h-[600px] w-[272px] overflow-hidden rounded-[2.5rem] bg-background transition-opacity duration-300",
            !isScreenOn && "opacity-0"
          )}
        >
          <StatusBar />
          <div className="h-full w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}