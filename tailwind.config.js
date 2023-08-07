/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF004D",
      },
      fontFamily: {
        primary: ['Horizon', 'sans-serif'],
        outlined: ['Horizon_Outline', 'sans-serif'],
        mono: ['Roboto Mono', 'sans-serif']
      }
    },
  },
  plugins: [],
};
