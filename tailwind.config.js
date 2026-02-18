/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'vote-teal': '#003670',
        'vote-teal-light': '#6baeb8',
        'vote-bg': '#f3f4f6',
        'vote-yellow': '#ffbb00',
      }
    },
  },
  plugins: [],
}