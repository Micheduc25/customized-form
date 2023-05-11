/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "sans-serif"],
      },

      colors: {
        appGreen: "#003f3a",
        appGray: "#d8e5e1",
        appGreenLight: "#a4b6b0",
      },
    },
  },
  plugins: [],
};
