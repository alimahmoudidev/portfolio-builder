/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#FFB400",
        },
        "green": "#7EB942",
        clr: {
          "18": "#18191A",
          "24": "#242526",
          "2b": "#2B2B2B",
          "3a": "#3A3B3C",
          "76": "#767676",
          "e4": "#E4E6EB",
          "f0": "#F0F0F6",
          "ff": "#ffffff"
        },
      },
      boxShadow:{
        "box-sm": "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}