/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-card':'url(/images/bg-pattern-card.svg)'
      }
    },
  },
  plugins: [],
}

