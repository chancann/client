module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    textColor: {
      'white-1': '#F5F5F5',
      'purple-1': '#AC5BB9',
      'purple-2': '#663C6C',
      'gray-1': '#9C809F',
      'gray-2': '#C9BBCC'
    },
    maxWidth: {
      'mw-1': '18rem ',
      'mw-2': '24rem',
      'mw-3': '420px',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'screen': '60vh',
      'main': '80vh'
      // 'navfoot': '5vh',
      // 'c-main': '(100vh-140px)'
    },
    screens: {
      'sm-android': '320px',
      'android': '480px',
      'sm-tablet': '640px',
      'tablet': '860px',
      'md-tablet': '1024px',
      'laptop': '1366px',
      'desktop': '1440px'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'purple-1': '#AC5BB9'
    }),
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'b1': '#F5F5F5',
      'b2': '#AC5BB9'
     }),
    extend: {
      spacing: {
        // Width
        'w1': '180px',
        'w2': '220px',
        'w3':'280px'
      },
      width: {
        // Width
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '86%',
        '7/7': '90%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}