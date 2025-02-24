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
    },
  },
  plugins: [],
}

