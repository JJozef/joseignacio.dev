const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Mona Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'aside-link': '#eaeaea',
        'menu-color': '#111212cc',
        'menu-color-light': '#111112',
        'subtrans-color': '#e0e0e03a',
        'jungle-green': '#221F1F',
        'chinese-white': '#E1E1E1'
      },
      boxShadow: {
        'aside-link-sw':
          'rgba(245, 244, 244, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.04) 0px 2px 8px, rgba(0, 0, 0, 0.05) 0px 30px 70px'
      },
      fontSize: {
        md: '0.938rem'
      },
      height: {
        dvh: '100dvh'
      },
      zIndex: {
        '10-i': '10 !important'
      }
    }
  },
  plugins: []
}
