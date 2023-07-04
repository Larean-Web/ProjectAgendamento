/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkblue-base":"#123142",
        "blue-base":"#3DA5F5",
        "purple-base":"#4E4463",
        "pink-base":"#EA4674",
        "gray-base":"#D9D9D9"
      }
    },
  },
  plugins: [],
}
