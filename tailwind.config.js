/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "primary-yellow" : "#FFB400",
        "primary-green" : "#7EB942",
        clr : {
          "18" : "#18191A",
          "24" : "#242526",
          "2b" : "#2B2B2B",
          "3a" : "#3A3B3C",
          "76" : "#767676",
          "e4" : "#E4E6EB",
          "f0" : "#F0F0F6",
          "ff" : "#ffffff"
        },
      }
    },
  },
  plugins: [],
}