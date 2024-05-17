/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        auditype: ["AudiType"]
      },
      fontWeight: {
        thin: '100',
        normal: '400',
        bold: '700'
      },
      
    },
  },
  plugins: [],
}
