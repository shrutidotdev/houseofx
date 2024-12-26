"use client";

import { useEffect, useRef } from 'react';

interface VideoSlideProps {
  url: string;
  title: string;
  isActive: boolean;
}

export function VideoSlide({ url, title, isActive }: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignore play interruption errors
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div className="relative group ">
      <video
        ref={videoRef}
        className="w-full  object-cover rounded-2xl"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
}