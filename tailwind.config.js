/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#32445a',
        secondary: '#2b3548'
      },
      fontSize: {
        15: '0.938rem'
      }
    },
  },
  plugins: [],
}
