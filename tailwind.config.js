/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      black2: "#211E1E",
      blackTrans: "rgba(33,30,30,0.36)",
      white2:"#F1EFED"
    },
    extend: {
      height: {
        90: '80vh',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}