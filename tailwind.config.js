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
        '700': '700px',
      },
      backgroundImage : {
        'test-img': "url('/public/img/abandoned-dog-shelter.jpg')",
        'dog-shelter1': "url('/public/img/dog-shelter2.jpg')",
        'dog-shelter2': "url('/public/img/dog-shelter.jpg')",
        'dog-shelter3': "url('/public/img/dog-shelter3.jpg')"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}