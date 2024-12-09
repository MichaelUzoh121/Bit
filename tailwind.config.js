/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      gradientColorStops: {
        '90%': '90%', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #fff5, #0C4A6E, #fff5)',
      },
      screens: {
        'mc': '1440px', // Custom breakpoint for MacBook
      },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'], // Adds support for rounded scrollbars
  },
}}