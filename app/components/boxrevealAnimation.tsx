"use client";

import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function BoxRevealDemo() {
  return (
    <div className="w-full flex items-center justify-center  px-4 sm:px-10 lg:px-8">
      <div className="max-w-3xl mx-auto w-full space-y-10">
        <BoxReveal boxColor="#45eb53" duration={0.5}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Who Are We<span className="text-[#45eb53]">?</span>
          </h1>
        </BoxReveal>

        <BoxReveal boxColor="#45eb53" duration={0.6}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Empowering Creators{" "}
            <span className="text-[#45eb53]">to Thrive in Business</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor="#45eb53" duration={0.7}>
          <div className="">
            {[
              "Empowering Creators",
              "Democratizing Brand Creation",
              "Innovative Tools",
              "Community-Driven",
              "Your Success is Our Mission",
              "X = Endless Potential"
            ].map((text, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                {index !== 5 && (
                  <Sparkles className="w-6 h-6 text-[#45eb53] group-hover:scale-110 transition-transform" />
                )}
                <p className="text-lg sm:text-xl text-white/90 font-medium">
                  {index === 5 ? (
                    <span className="text-[#45eb53]">{text}</span>
                  ) : (
                    text
                  )}
                </p>
              </div>
            ))}
          </div>
        </BoxReveal>

        <BoxReveal boxColor="#45eb53" duration={0.8}>
          <div className="pt-4">
            <Button
              asChild
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#45eb53] to-[#32c53f] hover:from-[#32c53f] hover:to-[#2ba636] text-white shadow-lg shadow-[#45eb53]/20 hover:shadow-xl hover:shadow-[#45eb53]/30 transition-all duration-300 group"
            >
              <Link href="/about" className="flex items-center justify-center gap-2">
                Explore
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </BoxReveal>
      </div>
    </div>
  );
}