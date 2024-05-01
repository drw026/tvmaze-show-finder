const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turqoise': '#00716b',
        'turqoise-light': '#eef7f6',
        'turqoise-dark': '#004c4c',
        'yellow': '#ffd200',
        'yellow-light': '#ffe263'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    plugin(
      function({ addBase, theme }) {
        addBase({
          'html': { fontSize: "14px" },
          'body': { backgroundColor: theme('colors.turqoise') }
        })
      }
    )
  ],
}
