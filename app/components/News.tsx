import { useEffect, useState } from "react";
import { VelocityScroll } from "./VelocityScroll";
import { NewsCard } from "./Newscard";
import Image from 'next/image';

interface NewsItem {
  src: string;
  alt: string;
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
}

const NEWS_DATA: NewsItem[] = [
  {
    src: "/founderImg/raj food lab.webp",
    alt: "Raj Shamani",
    title: "Raj Shamani plans to launch more creator-led brands, in talks with 20 influencers",
    source: "Hotelierindia",
    date: "2023",
    url: "https://www.hotelierindia.com/operations/entrepreneur-raj-shamani-and-celebrity-chef-sanjyot-keer-collaborate-to-unveil-yfl",
    excerpt: "Entrepreneur Raj Shamani and celebrity chef Sanjyot Keer collaborate to unveil YFL.Continuing with its commitment of enabling creators to start brands in seven days, House of X"
  },
  {
    src: "/founderImg/Raj-Shamani.webp",
    alt: "Raj Shamani",
    title: "Raj Shamani plans to launch more creator-led brands, in talks with 20 influencers",
    source: "MoneyControl",
    date: "2024",
    url: "https://www.moneycontrol.com/news/business/startup/raj-shamani-plans-to-launch-more-creator-led-brands-in-talks-with-20-influencers-12008751.html",
    excerpt: "Digital creator and entrepreneur Raj Shamani is planning to launch more creator-led brands and is in talks with about 20 influencers for the same."
  },
  {
    src: "/founderImg/kingRaj.webp",
    alt: "Raj Shamani",
    title: "In three months since launch, Popstar King's brand Blanko hits Rs1 crore per month run rate in revenue with House of X",
    source: "Forbes India",
    date: "2024",
    url: "https://www.forbesindia.com/article/news/in-three-months-since-launch-popstar-kings-brand-blanko-hits-rs1-crore-per-month-run-rate-in-revenue-with-house-of-x/86927/1",
    excerpt: "King's brand Blanko, launched in collaboration with House of X, has achieved significant success with a monthly revenue run rate of Rs1 crore within three months of launch."
  }
];

const News: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(NEWS_DATA.length).fill(false));

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageLoad = (index: number): void => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative min-h-screen text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Parallax Header */}
        <section className="h-[12rem] relative overflow-hidden flex items-center">
          <VelocityScroll 
            text="HOUSE OF X IN THE FEATURED IN RECENT NEWS"
            defaultVelocity={2}
            className="text-[#53d342] text-5xl md:text-[4rem] font-bold tracking-tighter"
            style={{
              textShadow: 
                'rgb(255,255,255) 5px 5px,' +
                'rgb(253, 243, 228) -2px 0px,' +
                'rgb(253, 243, 228) 0px 2px,' +
                'rgb(253, 243, 228) 0px -2px,' +
                'rgb(253, 243, 228) 1px 1px,' +
                'rgb(253, 243, 228) -1px -1px,' +
                'rgb(253, 243, 228) -1px 1px,' +
                'rgb(253, 243, 228) 1px -1px'
            }}
          />
        </section>

        {/* News Grid */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {NEWS_DATA.map((item: NewsItem, index: number) => (
              <div 
                key={index}
                className="group flex flex-col space-y-4 transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-[22rem] w-full overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      !imagesLoaded[index] ? 'opacity-0' : 'opacity-100'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    quality={95}
                    onLoad={() => handleImageLoad(index)}
                    loading="eager"
                  />
                  {!imagesLoaded[index] && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                  )}
                </div>
                <NewsCard 
                  title={item.title}
                  source={item.source}
                  date={item.date}
                  url={item.url}
                  excerpt={item.excerpt}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default News;