/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yes: '#3b82f6', // 青（Tailwind の blue-500）
        no: '#ef4444',  // 赤（Tailwind の red-500）
        selectedYes: '#60a5fa', // 選択済みの青（blue-400）
        selectedNo: '#f87171'   // 選択済みの赤（red-400）
      }
    },
  },
  plugins: [],
};
