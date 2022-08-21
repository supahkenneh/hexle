/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'correct': '#538d4e',
        'misplaced': '#b59f3b',
        'incorrect': '#86888a',
        'invalid': '#3a3a3c'
      }
    },
  },
  plugins: [],
}
