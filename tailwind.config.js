/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '646x',
      'md': '848px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#051622;',
      'neon': '#72FFFF;'
    },
    boxShadow:{
      '3xl':'0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)'
    },
    height: {
      '128': '31.5rem',
      '120': '22.8rem',
      '12': '20rem',
      '10': '25rem',
      '23': '13rem',
      '22': '2/4'
    },
    extend: {},
  },
  plugins: [],
}
