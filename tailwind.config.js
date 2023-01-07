/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('../public/bgg.png')",
      }
    },
  },
  plugins: [],
};
