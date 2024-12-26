import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";

interface TeamMemberProps {
  image: string
  name: string
  title: string
}

function OurTeam() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      
      {/* Simpler Bento Grid Background */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          />
        ))}
      </div>
      
      {/* Animated orbs with adjusted z-index */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] animate-float z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px] animate-float-delayed z-0" />
      
      {/* Main content with higher z-index */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] text-center">
            Founders
          </h2>
          <h3 className="text-lg md:text-xl text-gray-400">
            Meet the visionaries behind House of X&apos;s success.
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <TeamMember
            image="/founderImg/Raj-Shamani.jpg"
            name="Raj Shamani"
            title="Founder, House of X"
          />
          <TeamMember
            image="/founderImg/neeraj.jpg"
            name="Neeraj Kumawat"
            title="Co-founder, House of X"
          />
        </div>
      </div>
    </section>
  )
}

function TeamMember({ image, name, title }: TeamMemberProps) {
  return (
    <Card className="group relative bg-black/40 border border-gray-800 backdrop-blur-sm hover:border-[#5dc853]/50 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5dc853]/5 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-[#5dc853]/20 group-hover:ring-[#5dc853]/40 transition-all duration-300">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        <CardTitle className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          {name}
        </CardTitle>
        <p className="text-[#5dc853] font-medium tracking-wide">
          {title}
        </p>
      </CardHeader>
    </Card>
  )
}

export default OurTeam;