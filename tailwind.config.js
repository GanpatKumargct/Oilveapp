/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        olive: {
          900: '#1C2B1D', // Dark text
          800: '#2C422E', // Secondary text
          600: '#547B49', // Primary green
          500: '#728956', // Accent sage
          100: '#E4EBDA', // Light accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
