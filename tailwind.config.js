/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',//'media', 'class'
  prefix: '',
  content: [
    './**.html',
    './src/**/*.{html,css}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
