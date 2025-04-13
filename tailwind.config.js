/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors for fadiOS here if needed
      },
      zIndex: {
        '60': '60',
        '70': '70',
      }
    },
  },
  plugins: [],
}
