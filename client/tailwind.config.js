/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Metropolis', 'Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'base': ['1.6rem', { lineHeight: '1.5' }],
      },
      colors: {
        'eneba-purple-primary': '#4618ac',
        'eneba-purple-secondary': '#1f0a4d',
        'eneba-blue-accent': '#23C299',
        'eneba-green-accent': '#84e916',
        'eneba-dark-text': '#1F0A4D',
      }
    },
  },
  plugins: [],
}