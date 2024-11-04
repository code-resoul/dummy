/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#0F0F0F',
        secondary: '#FBFBFB',
        green: '#4FB286',
        'green-dark': '#3C896D',
        blue: '#016FB9'
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
