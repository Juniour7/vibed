/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ["Sansation", "sans-serif"],
          man: ["Manrope", "sans-serif"],
          riot: ["Protest Riot", "sans-serif"],
        },
        colors: {
          primary: '#B58863',
          dark: '#3A3A3A',
          accent: '#10B981',
        },
    },
  },
  plugins: [],
}

