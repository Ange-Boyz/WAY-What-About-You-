//  type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'way-red': '#ED1C24',
        'way-blue': '#0071BC',
        'way-green': '#00A99D',
      }
    },
  },
  plugins: [],
}