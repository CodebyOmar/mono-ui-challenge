// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.tsx",
    "./src/**/*.jsx", 
    "./src/**/*.ts"
  ],
  theme: {
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
      headline: ['Lato', 'sans-serif']
    },
    extend: {
      spacing: {
        '7.5': '1.8rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '28rem',
      },
      colors: {
        opaque: "rgba(0, 0, 0, 0.7)",
        "white-opaque": "rgba(255,255,255,0.2)",
        "gtbank": "#D94F00",
        "polaris": "#8934AD",
        "cowrywise": "#055DE0",
        "cowrybule": "#0067F5",
        "piggy": "#083E9E",
        neutral: {
          "100": "#f6f6f6",
          "900": "#101326"
        },
        muney: {
          "100": "#EFFDF6",
          "200": "#E0FBED",
          "500": "#68F3A8",
          "600": "#10C664"
        }
      },
    },
    borderRadius: {
      custom: "50px",
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'btn': '24px',
      'tiny': '16px',
      'midi': '19px'
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '25': '.25',
      '40': '.4',
      '50': '.5',
      '75': '.75',
      '100': '1'
    }
  },
  variants:{
    borderWidth: ['last', 'first'],
    opacity: ['disabled'],
    hidden: ['last'],
    block: ['last'],
    cursor: ['disabled']
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
