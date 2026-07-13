/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      colors: {
        'hearth-charcoal': '#0F172A',
        'hearth-emerald': '#0F5132',
        'hearth-gold': '#D3A237',
      },
      },
    },
  },
  plugins: [],
};
