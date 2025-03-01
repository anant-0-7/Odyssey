/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["OdysseyFont", "sans-serif"], // Use this in Tailwind classes
      },
      keyframes: {
        slideFromRight: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1,  transform: 'translateX(0)' },
        },
        slideFromLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100px) scaleX(-1)' },
          '100%': { opacity: 1, transform: 'translateX(0) scaleX(-1)' },  
        },
        slideFromBottom: {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideFromRight: 'slideFromRight 1s ease-out forwards',
        slideFromLeft: 'slideFromLeft 1s ease-out forwards',
        slideFromBottom: 'slideFromBottom 1s ease-out forwards',
      },
      
    },
  },
  plugins: [],
}

