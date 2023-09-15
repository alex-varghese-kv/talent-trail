
const customThemes = require('./src/theme/customThemes.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: customThemes,
  },
  plugins: [],
}

