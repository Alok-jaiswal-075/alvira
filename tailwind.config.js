/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      colors: {
        background: "#F1F2F2",
        text: "#000000",
        text_gray: "#636363",
        text_hover:"#C19A83"
      },
      fontFamily: {
        oswald : ["Oswald", "sans-serif"]
      },
      fontSize:{
        headingXL : 70,
        headingL : 50,
        heading : 25,
        link : 14,
        linksm:12,
        normal : 20,

      }
    },
  },
  plugins: [],
}
