/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#101010',
          card: '#181818',
          cardHover: '#222222',
          light: '#F4F4F0',
          darkText: '#151515',
          accent: '#C7F464',
          accentHover: '#b5e64e',
          border: '#262626',
          muted: '#8E8E93',
        }
      },
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        heading: ['Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
