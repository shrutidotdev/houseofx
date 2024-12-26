'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

// Define routes as a constant object for consistent usage
const ROUTES = {
  home: '/',
  faq: '/faq',
  about: '/about',
  brands: '/brands',
  contact: '/contact',
  careers: '/careers',
  refer: '/refer',
  privacyPolicy: '/privacy-policy'
} as const;

// Define TypeScript types
type NavItem = {
  name: string;
  href: (typeof ROUTES)[keyof typeof ROUTES] | `#${string}`;
  hasDropdown?: boolean;
  dropdownItems?: Array<{ name: string; href: string }>;
};

interface NavLinkProps extends NavItem {
  isWorkOpen?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// NavLink component with proper Link usage
const NavLink: React.FC<NavLinkProps> = ({
  name,
  href,
  hasDropdown,
  dropdownItems
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.substring(1));
    }
  };

  return (
    <div className="relative group">
      <Link 
      href={href} 
      className="flex items-center font-semibold text-white text-[18px] hover:text-[#96e041] px-3 transition-all duration-300"
      onClick={handleClick}
      >
        <span>{name}</span>
        {hasDropdown && (
          <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        )}
      </Link>
      {hasDropdown && dropdownItems && (
        <div className="absolute hidden pt-4 group-hover:flex">
          <div className="flex-col w-48 gap-4 py-4 px-4 rounded-lg flex bg-[#1d1c1c]">
            {dropdownItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#ffffff] hover:text-[#96e041] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// MobileMenu component with proper Link usage
interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavItem[];
  onLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navLinks, onLinkClick }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed inset-x-0 top-[5rem] z-50"
      >
        <motion.div
          className="min-h-[calc(100vh-5rem)] bg-black/95 text-white backdrop-blur-lg border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-4 text-xl font-medium text-[#19ff4b] hover:text-white group-hover:bg-[#1a1a1a] rounded-lg px-4 transition-all duration-300"
                  onClick={onLinkClick}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </Link>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-1" />
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-8"
            >
              <a 
                href="https://wa.me/917760930987?text=Thank%20you%20for%20reaching%20out!%20We're%20here%20to%20assist%20you.%20Please%20schedule%20the%20meeting%20at%20your%20convenience,%20and%20our%20team%20will%20guide%20you%20through%20the%20process.%0A%0AHere's%20a%20link%20to%20schedule%20a%20meeting%20with%20our%20team:%20https://calendly.com/shrutisinghz/walk-through.%20Just%20pick%20a%20time%20that%20works%20for%20you,%20and%20we'll%20take%20care%20of%20the%20rest!"
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-7 py-4 rounded-lg bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                >
                  Schedule a Call
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ScheduleButton: React.FC = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-5 py-2 rounded-full bg-[#5bc351] text-white font-semibold hover:bg-[#4da644] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
  >
    Schedule a Call
  </motion.button>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { name: 'Home', href: ROUTES.home },
    { name: 'FAQ', href: ROUTES.faq },
    { name: 'About', href: ROUTES.about }, 
    { 
      name: 'Our Brands', 
      href: '#brands', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blanko', href: 'https://ifeelblanko.com/' },
        { name: 'YLFHome', href: 'https://yflhome.com/' }
      ]
    },
    { name: 'Contact', href: ROUTES.contact },
    { name: 'Careers', href: ROUTES.careers },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full h-[6rem] text-gray-300 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-black/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={ROUTES.home} className="flex-shrink-0 flex items-center">
              <Image 
                src="/hox-logo-default - 48x48.png" 
                alt="House of X logo" 
                width={48} 
                height={48}
                className="h-12 w-12 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                {...link}
                isWorkOpen={isWorkOpen}
                onMouseEnter={() => link.hasDropdown && setIsWorkOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsWorkOpen(false)}
              />
            ))}
          </div>

          <div className="hidden lg:block">
            <a 
              href="https://wa.me/917760930987?text=Thank%20you%20for%20reaching%20out!%20We're%20here%20to%20assist%20you.%20Please%20schedule%20the%20meeting%20at%20your%20convenience,%20and%20our%20team%20will%20guide%20you%20through%20the%20process.%0A%0AHere's%20a%20link%20to%20schedule%20a%20meeting%20with%20our%20team:%20https://calendly.com/shrutisinghz/walk-through.%20Just%20pick%20a%20time%20that%20works%20for%20you,%20and%20we'll%20take%20care%20of%20the%20rest!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <ScheduleButton />
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lime-600 focus:outline-none transition-colors duration-300"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} navLinks={navLinks} onLinkClick={() => setIsOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;