module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '26':'115px',
        '144':'576px',
      },
      width:{
    '23':'812px',
    '26':'115px',
    '180':'600px',
    '45':'48%',

    },
    colors:{
      white:'#FFFFFF',
      black:{
        50:'#333333',
        100:'#141414',
      },
      yellow:'#FFDB0A',
      blue:{
        50:'#3D61B0',
        100:'#26458C',
      },
      grey:'#F6FAFC',
      red:'#FF6142',

    }
  },
  fontFamily:{
poppins:'poppins'
  }
  },
  plugins: [],
}