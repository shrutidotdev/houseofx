/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
		},
		animation: {
		  'scroll': 'scroll 20s linear infinite',
		  'fade-in': 'fadeIn 1s ease-out forwards',
		  'marquee': 'marquee var(--duration) linear infinite',
		  'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
		  'grid': 'grid 15s linear infinite',
		  'spin-slow': 'spin-slow 20s linear infinite',
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out'
		},
		keyframes: {
		  marquee: {
			from: { transform: 'translateX(0)' },
			to: { transform: 'translateX(calc(-100% - var(--gap)))' }
		  },
		  'marquee-vertical': {
			from: { transform: 'translateY(0)' },
			to: { transform: 'translateY(calc(-100% - var(--gap)))' }
		  },
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' }
		  },
		  scroll: {
			'0%': { transform: 'translateX(0)' },
			'100%': { transform: 'translateX(-100%)' }
		  },
		  orbit: {
			'0%': { transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)' },
			'100%': { transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)' }
		  },
		  grid: {
			'0%': { transform: 'translateY(-50%)' },
			'100%': { transform: 'translateY(0)' }
		  },
		  'shimmer-slide': {
			to: { transform: 'translate(calc(100cqw - 100%), 0)' }
		  },
		  'spin-around': {
			'0%': { transform: 'translateZ(0) rotate(0)' },
			'15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
			'65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
			'100%': { transform: 'translateZ(0) rotate(360deg)' }
		  },
		  'spin-slow': {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' }
		  },
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' }
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' }
		  }
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  background: 'rgb(var(--background) / <alpha-value>)',
		  foreground: 'rgb(var(--foreground) / <alpha-value>)'
		}
	  }
	},
	plugins: [require("tailwindcss-animate")]
  }