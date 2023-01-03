/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fundrasing-color': '#dc287c',
      },
      spacing: {
        '01': '1px',
        '02': '2px',
        '70': '70px',
        '88': '88px',
        '90': '90px',
        '100': '100px',
        '300': '300px',
        '350': '350px',
        '620': '620px',
        '680': '680',
        '700': '700px',
      },
      backgroundImage : {
        'test-img': "url('/public/img/abandoned-dog-shelter.jpg')",
        'dog-shelter1': "url('/public/img/dog-shelter2.jpg')",
        'dog-shelter2': "url('/public/img/dog-shelter.jpg')",
        'dog-shelter3': "url('/public/img/dog-shelter3.jpg')"
      },
      lineHeight: {
        '60': '60px',
        '80': '80px',
      },
      zIndex: {
        '100': '100',
      },
      fontSize: {
        full: '100%',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}