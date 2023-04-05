/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'magenta': '#E20074',
      'magenta-dark': '#D00060',
      'white': '#fff',
      'black': '#000',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      fontFamily: {
        poppins: 'poppins'
      }
    },
  },
  plugins: [],
}