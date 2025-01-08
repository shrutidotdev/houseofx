"use client";

import { Bell, Home, MessageCircle, Settings, User } from "lucide-react";
import { memo } from "react";
import RevenueEstimator from "./estimatedRevenue";
import logo from '../../public/hox-logo-default - 32 x 32.webp'
import Image from 'next/image'
import Link from 'next/link'


const Header = memo(() => (
  <header className="flex items-center justify-between border-b px-4 py-1 backdrop-blur-sm">
    <Image src={logo}  alt="house of x logo" />
    <Bell className="h-5 w-5 text-green-300" />
  </header>
));

Header.displayName = "Header";

const Navigation = memo(() => (
  <nav className="flex items-center justify-around  px-4 py-2 bg-green-950/50 backdrop-blur-sm">
    <Link href={"/about"}>
    <Home className="h-6 w-6 text-green-300" />
    </Link>
    
    <MessageCircle className="h-6 w-6 text-green-400/60" />
    <User className="h-6 w-6 text-green-400/60" />
    <Settings className="h-6 w-6 text-green-400/60" />
  </nav>
));

Navigation.displayName = "Navigation";

export function AppInterface() {
  return (
    <div className="mt-4 flex h-full flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900 via-black to-black ">

      <div className="mt-1">
        <Header />
      </div>
      
      <div className=" flex-1 overflow-auto p-4 custom-scrollbar">
        <RevenueEstimator />
      </div>

      <div className="mb-6">
      <Navigation />
      </div>
      
    </div>
  );
}