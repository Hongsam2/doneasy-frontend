/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '70': '70px',
        '90': '90px',
        '100': '100px',
        '300': '300px',
        '620': '620px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}