/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FAFAF9',
        'brand-beige': '#D9CBB6',
        'brand-black': '#1D1D1B',
        'brand-blue': '#227C9D',
        'brand-green': '#2A6041',
        'brand-teal': '#355E57',
        'brand-light-green': '#CEE3CF',
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
      'brand-gradient': 'linear-gradient(to bottom right, #FAFAF9, #CEE3CF)',
      }
    },
  },
  plugins: [],
}