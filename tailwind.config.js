/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      maxWidth:{
        "container":"1200px"
      },
      fontFamily:{
        'manFont':['Manrope', 'sans-serif']
      },
      fontSize:{
        '22px':'22px',
        '50px':'50px'
      },
      lineHeight: {
        'l_h56': '56px',
      },
      colors:{
        'primary':'#3734A9',
        'second':'#757095',
        'third':'#F3F7FA',
        'btncolor':"#FF7F5C",
      },
      zIndex: {
        'z1': '-1',
      }
    },
  },
  plugins: [],
}
