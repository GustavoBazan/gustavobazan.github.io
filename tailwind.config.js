/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "interface": ["Montserrat", "sans-serif"],
      "display": ["Rubik Doodle Shadow", "system-ui"],
    },
    extend: {
      keyframes: {
        float: {
          '0%': {transform: 'translate(0,  0px)'},
          '50%':  { transform: 'translate(0, 15px)' },
          '100%':   { transform: 'translate(0, -0px)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },

  plugins: [],
}