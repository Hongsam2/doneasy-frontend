/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kakao: ["kakaoReqular", "sans-serif"],
      }
      
    },
  },
  plugins: [],
}