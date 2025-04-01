/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yes: '#3b82f6',           // 青
        no: '#ef4444',            // 赤
        selectedYes: '#60a5fa',   // 薄い青
        selectedNo: '#f87171'     // 薄い赤
      },
      backgroundColor: theme => theme('colors'),
      textColor: theme => theme('colors')
    },
  },
  plugins: [],
};
