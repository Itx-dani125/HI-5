/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3E63DD',
        'secondary': '#EDF2FE',
        'tertiary': '#ffffff',
        'txt-color-light': '#7D7F92',
        'txt-black': '#1967D2',
        'accent': '#E2E8F0',
        'error': '#FF0000',
        'warning': '#FFA500',
        'success': '#008000',
        'info': '#00C0E0',
      }
    },
  },
  plugins: [],
}