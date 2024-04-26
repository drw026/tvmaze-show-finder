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
        'turqoise': '#5fa7a7',
        'turqoise-light': '#eef7f6',
        'turqoise-dark': '#293737'
      },
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    plugin(
      function({ addBase }) {
        addBase({
          'html': { fontSize: "14px" },
        })
      }
    )
  ],
}
