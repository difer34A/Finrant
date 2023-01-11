/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '600px',
      'lg': '850px',
      'xl': '1124px',
      '2xl': '1436px',
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      }
    },
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'soft' : {
        'black': {
          100: "#d2d5d7",
          200: "#a5abae",
          300: "#778186",
          400: "#4a575d",
          500: "#1d2d35",
          600: "#17242a",
          700: "#111b20",
          800: "#0c1215",
          900: "#06090b"
        },
        'white': {
          100: "#fffefd",
          200: "#fefcfb",
          300: "#fefbfa",
          400: "#fdf9f8",
          500: "#fdf8f6",
          600: "#cac6c5",
          700: "#989594",
          800: "#656362",
          900: "#333231"
        },
        'darkwhite' : '#fdf1ed',
      },
      'sugarmilk' : '#fdf5f2',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      '1': '#b3dcff',
      '2': '#5ecc62',
      '3': '#00ad45',
    },
  },
  plugins: [],
}
