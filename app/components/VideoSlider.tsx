/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { VideoSlide } from './VideoCarousel';
import { cn } from '@/lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export const videos = [
  {
    id: 1,
    url: 'video/teaser empire0.mov',
    title: 'Blanko',
  },
  {
    id: 2,
    url: 'video/ylf0.mp4',
    title: 'YLFHome',
  },
  {
    id: 3,
    url: 'video/teaser oud1.mov',
    title: 'Blanko',
  },
  {
    id: 4,
    url: 'video/ylf1.mp4',
    title: 'YLFHome',
  },
  {
    id: 5,
    url: 'video/teaser billionare2.mov',
    title: 'Blanko',
  },
  {
    id: 6,
    url: 'video/ylf2.mp4',
    title: 'YLFHome',
  },
];

const VideoSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className=" relative w-[full]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-black/80 to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} !bg-green-400 hover:!bg-white transition-all"></span>`;
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop={true}
            modules={[Pagination, Autoplay, EffectCoverflow]}
            onSlideChange={handleSlideChange}
            className={cn(
              "h-full transition-transform duration-500",
              isHovering ? "scale-105" : "scale-100"
            )}
          >
            {videos.map((video, index) => (
              <SwiperSlide 
                key={video.id}
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto" // Changed to w-full for smaller devices
              >
                {({ isActive }) => (
                  <div className={cn(
                    "relative rounded-3xl overflow-hidden transition-all duration-500",
                    isActive ? "scale-100" : "scale-90 opacity-50"
                  )}>
                    <VideoSlide
                      url={video.url}
                      title={video.title}
                      isActive={isActive}
                    />
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300",
                      isActive && "opacity-100"
                    )}>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold tracking-wide">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;