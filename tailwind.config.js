/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1B1C57',
        'gray': '#888B97',
        'gray-black': '#626687',
        'yellow': '#F59E0B',
        'orange': '#EF4444',
        'blue': '#1D4ED8',
        'green': '#047857',
        'green-light': '#D1FAE5',
      },
    },
  },
  plugins: [],
}