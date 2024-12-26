"use client";

import React from "react";
import { ExternalLink } from 'lucide-react';
import Link from 'next/link'

interface NewsCardProps {
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
}

export function NewsCard({ title, source, date, url, excerpt }: NewsCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[580px] p-4  rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <span className="text-[#7cd342] font-medium mb-2 sm:mb-0">{source}</span>
        <span className="text-zinc-400 text-sm">{date}</span>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-[#7cd342] transition-colors line-clamp-2">
        {title}
      </h3>
      
      <p className="text-zinc-400 mb-6 flex-grow line-clamp-3 sm:line-clamp-4">
        {excerpt}
      </p>
      
      <Link 
        href={url} 
        className="inline-flex items-center text-[#7cd342] hover:underline transition-all duration-300 " 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span className="mr-2 mt-2 cursor-pointer">Read More</span>
        <ExternalLink size={16} />
      </Link>
    </div>
  );
}

