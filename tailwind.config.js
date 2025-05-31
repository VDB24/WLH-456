/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#F9F9F9',
        'dark-bg': '#1E1C21',
        'primary': '#5164E1',
        'secondary': '#A7D1F1',
      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}