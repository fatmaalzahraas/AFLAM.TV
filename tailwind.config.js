/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: '#f44250',
        darkColor: '#080A1A',
        blackColor: '#000',
        lightColor: '#fafafa',
        grayColor: '#cecece',
        switchMode: '#eeb004',
        star: '#ffb000',
        border: '#4b5563',
        borderColor: '#e2e8f0',
        darkBlue: '#0B0f29',
        lightBlue: '#38bdf8'

      },
      screens: {
        xs: {'max': '414px'},
      },
      spacing: {
        '18': '66px'
      },
      padding: {
        '3.5': '15px'
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0,0.7))'
      }
    },
  },
  plugins: [],
}
