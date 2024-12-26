import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ModeCardProps {
  mode: string;
  edition: string;
  image: string;
  url: string;
  description?: string;
}

const ModeCard = ({ mode, edition, image, url, description }: ModeCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-black border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={image}
          alt={`${mode} preview`}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
          width={1000}
          height={625}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-6 border-t border-[#1f1f1f] bg-[#000000]">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-Satoshi font-semibold text-white uppercase">
              {mode}
            </h2>
            <p className="text-[#949494] mt-1 text-lg">
              {edition}
            </p>
            {description && (
              <p className="text-gray-400 mt-3">
                {description}
              </p>
            )}
          </div>
          
          <Button
            asChild
            variant="secondary"
            className=" px-7 py-4 rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            <Link href={url} target="_blank" className="inline-flex items-center gap-2">
              VIEW <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          
        </div>
      </div>
    </Card>
  );
};

// <button className="w-full px-6 py-3 bg-green-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
{/* <span className="text-lg font-semibold">Get Started</span>
<ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
</button> */}


export default ModeCard;