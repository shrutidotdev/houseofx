"use client";

import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import News from "./components/News";
import { AppInterface } from "./components/iphone";
import MarqueeDemo from './components/partners';
import OurTeam from './components/team';
import ModeCard from "./components/allbrand";
import localFont from 'next/font/local';
import BackedByLight from './components/backedby';
import LoadingTransition from './loadingScreen';
import Video from './components/reels';
import { BoxRevealDemo } from "./components/boxrevealAnimation";
import PartnerConnect from "./components/partnerConnect";
import JoinedPartners from "./components/OurPartnerNetwork";
import MarqueeText from "./components/Marquee";
import Subscription from "./components/subscription";
import { FadeInSection, SlideInSection, ScaleUpSection } from "./components/ScrollTriggeredAnimations";
import VideoSlider from "./components/VideoSlider";
import { RetroGridDemo } from "./styles/RetroGridDemo";

const myFont = localFont({
  src: './fonts/Satoshi-Regular.otf',
  display: 'swap',
  weight: '400',
  style: 'normal',
  fallback: ['Arial'],
});

export default function Home() {
  return (
    <>
      <div className="z-10 flex flex-col items-center gap-8">
        <LoadingTransition />
      </div>

      <div className="relative z-40 top-[44rem]">
        <MarqueeText />
      </div>

      <div className={`${myFont.className} text-white overflow-x-hidden`}>
        <RetroGridDemo />

        <main className="relative w-full overflow-hidden">
          <div className="container mx-auto px-4 sm:px-2 mt-[6.7rem] lg:px-8 space-y-32 py-12 md:py-24 max-w-[1440px]">
            <section className="w-full">
              <VideoSlider />
            </section>

            <section className="top-10 relative grid grid-cols-1 md:grid-cols-2 lg:gap-12 w-full">
              <div>
                <BoxRevealDemo />
              </div>
              <div>
                <Video />
              </div>
            </section>

            <div className="pt-20">
              <section id="brands" className="w-full">
                <SlideInSection>
                  <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] text-center">
                      Our Brands
                    </h2>
                    <h3 className="text-lg md:text-xl text-gray-400">
                      Discover our brand with innovative products that redefine excellence.
                    </h3>
                  </div>
                </SlideInSection>
              </section>

              <section className="relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                <div className="max-w-6xl mx-auto px-4 relative">
                  <div className="flex flex-col md:flex-row gap-8 mt-10">
                    <ModeCard
                      mode="Blanko"
                      edition="Explore Blanko by King, top men's perfume in India"
                      image="/brands/blanko.jpeg"
                      url="https://ifeelblanko.com/"
                    />
                    <ModeCard
                      mode="YFLhome"
                      edition="Elevate your kitchen with Sanjyot Keer's favorites"
                      image="/brands/blender.jpg"
                      url="https://yflhome.com/products/blendlabpro2"
                    />
                  </div>
                </div>
              </section>
            </div>

            <section className="w-full min-h-screen bg-black overflow-hidden">
              <FadeInSection>
                <div className="relative">
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
                  
                  <div className="container mx-auto px-4 py-12 md:py-24">
                    <div className="text-center mb-8 md:mb-14 max-w-3xl mx-auto">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] bg-clip-text">
                        Instagram Revenue Estimator
                      </h2>
                      <h3 className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
                        Unlock the potential of your Instagram presence with our advanced revenue estimator.
                      </h3>
                    </div>

                    <div className="relative mt-8 md:mt-12">
                      <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/90 to-transparent z-10"></div>
                      <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/90 to-transparent z-10"></div>

                      <div className="rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#60af47] via-[#4e9b1b] to-[#030303] p-4 sm:p-6 md:p-8">
                        <div className="max-w-md mx-auto">
                          <IPhoneMockup>
                            <AppInterface />
                          </IPhoneMockup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </section>

            <section className="w-full">
              <ScaleUpSection>
                <PartnerConnect />
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/90 to-transparent"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/90 to-transparent"></div>
                  <div className="rounded-3xl flex flex-col md:flex-row gap-8 justify-between items-center">
                    <div className="w-full">
                      <div className="p-8 h-full">
                        <JoinedPartners />
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleUpSection>
            </section>

            <section className="w-full">
              <SlideInSection>
                <div className="space-y-16 md:space-y-24">
                  <OurTeam />
                      <ScaleUpSection>
                        <MarqueeDemo />
                        <BackedByLight />
                      </ScaleUpSection>
                  <FadeInSection>
                    <News />
                  </FadeInSection>
                </div>
              </SlideInSection>
            </section>

            <section className="w-full">
              <Subscription />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}