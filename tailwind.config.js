/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1a2f',
          dark: '#0f1d33',
          light: '#1a2f4f',
        },
        orange: {
          DEFAULT: '#e8842e',
          dark: '#d4651a',
        },
      },
    },
  },
  plugins: [],
}
