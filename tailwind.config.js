/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'fiexen': ['Studio Feixen Sans', 'sans-serif']
      },
      backgroundColor: {
        'themeBlue': '#01376d',
        'themeBlue2': '#88E8FD',
        'themeBlue3': '#E0F3FF',
        'themeGray': '#F4F7FF',
        'themeGray2': '#A7A9C5',
        'themeGray3': '#F4F5FA',
        'themeGreen': '#71E5AB',
        'themeGreen2': '#66CC99',
        'themeGreen3': '#00994D',
        'themeGreen4': '#C6FFE2',
        'themePink': '#FF998B',
        'themePink2': '#FFCACC',
        'themeRed': '#ED1B24',
        'themeRed2': '#FFC7C9',
        'themeYellow': '#EE9500',
        'themeYellow2': '#FEF7EA',
        'themeYellow3': '#FFEBC9',
        'themeOrange': '#FF8761',
        'themeSilver': '#C0C0C0',
      },
      colors: {
        'themeBlue': '#01376d',
        'themeBlue2': '#88E8FD',
        'themeBlue3': '#E0F3FF',
        'themeGray': '#F4F7FF',
        'themeGray2': '#A7A9C5',
        'themeGray3': '#F4F5FA',
        'themeGreen': '#71E5AB',
        'themeGreen2': '#66CC99',
        'themeGreen3': '#00994D',
        'themeGreen4': '#C6FFE2',
        'themePink': '#FF998B',
        'themePink2': '#FFCACC',
        'themeRed': '#ED1B24',
        'themeRed2': '#FFC7C9',
        'themeYellow': '#EE9500',
        'themeYellow2': '#FEF7EA',
        'themeYellow3': '#FFEBC9',
        'themeOrange': '#FF8761',
        'themeSilver': '#C0C0C0',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}