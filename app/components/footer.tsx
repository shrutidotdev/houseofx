'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/hox-logo-default - 180x180.png"
import localFont from 'next/font/local';
import { motion } from "framer-motion";


const myFont = localFont({
    src: '../fonts/Satoshi-Medium.otf',
    display: 'swap',
    weight: '400',
    style: 'normal',
    fallback: ['Arial'],
});

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  items: FooterLink[];
}

const FooterSection = ({ title, items }: FooterSectionProps) => (
  <div className=" mt-8 md:mb-0">
    <h3 className="text-[14px] tracking-[4px] font-bold text-[#b7b1b1] mb-4">{title}</h3>
    <ul className="space-y-4 -space-x-5 uppercase text-[16.5px] mt-8">
      {items.map((item) => (
        <li key={item.text}>
          <Link target="_black" href={item.href} className="text-white transition-colors duration-200">
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerSections = [
    { 
      title: 'OUR BRANDS', 
      items: [
        { text: '', href: '' },
        { text: 'BLANKO', href: 'https://ifeelblanko.com/' },
        { text: 'YLFHOME', href: 'https://yflhome.com/' },      ]
    },
    { 
      title: 'COMPANY', 
      items: [
        { text: '', href: '' },
        { text: 'About', href: '/about' },
        { text: 'Careers', href: '/career' },
        { text: 'Our Investors', href: '/our-investors' },
        { text: 'Privacy Policy', href: '/privacy-policy' }
      ]
    },
    { 
        title: `DON'T STALK, JUST FOLLOW`, 
        items: [
          { text: '', href: '' },
          { text: 'Instagram', href: 'https://www.instagram.com/houseofx.in/?hl=en' },
          { text: 'Linkedn', href: 'https://in.linkedin.com/company/house-of-x-01' },
          { text: 'Whatsapp', href: 'https://chat.whatsapp.com/EHoDJNMl6uJ02KkY23Gtfx' }
        ]
      },
  ];

  return (
    <footer className={`${myFont.className} bg-black text-white mt-12 py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - CTA Section */}
          <section className="max-w-xl ">
          <div className="mb-8">
              <Image src={logo} width={100} height={100} alt="House of X logo" className="-mb-6" />
            </div>
            
    
    {/* email section */}
           <section >

           <h3 className="text-[14px] tracking-[4px] font-semibold text-[#c9c9c9c4] pt-6 uppercase">email</h3>

           <div className="flex gap-1.5 mb-10">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
            </svg>

            <a href="mailto:contact@houseofx.in" className="text-white text-[16.5px]">contact@houseofx.in</a> 
            </div>
           </section>

            
            {/* Get in touch */}
            <div className="mt-[5rem] ">
              <h5 className="text-lg">
                Are you ready to turn your groundbreaking idea into a thriving business? 
                Join us at House of X and let&apos;s make it happen together!
              </h5>
              <div className="flex py-6">
              <Link href={"https://wa.me/917760930987?text=Thank%20you%20for%20reaching%20out!%20We're%20here%20to%20assist%20you.%20Please%20schedule%20the%20meeting%20at%20your%20convenience,%20and%20our%20team%20will%20guide%20you%20through%20the%20process.%0A%0AHere's%20a%20link%20to%20schedule%20a%20meeting%20with%20our%20team:%20https://calendly.com/shrutisinghz/walk-through.%20Just%20pick%20a%20time%20that%20works%20for%20you,%20and%20we'll%20take%20care%20of%20the%20rest!"}
                className="max-w-xs text-sm">                
                <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-7 py-4 rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                Get in Touch
              </motion.button>
            </Link>
            
              </div>

          
              
            </div>
          </section>

          {/* Right Side - Navigation Sections */}
          <div className="grid grid-cols-3 gap-8 sm:gap-10 sm:mb-10">
            {footerSections.map((section) => (
              <div key={section.title} >
                <FooterSection {...section} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-1 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400">&copy; 2024 Houseofx.in, Inc. All rights reserved.</p>
            <p className="text-white">
              Made with ❤️ by{' '}
              <Link href="https://twitter.com/shrutisinghz" target="_blank" className="hover:text-gray-400 transition-colors duration-200">
                Shruti
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;