/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'media',
  content: [
    './*.html',
    './src/**/*.{html,css}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
