const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                '4xl': '0 0px 100px 40px rgba(0, 0, 0, 0.3)',
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'nos': {
                    100: '#e7f0f5',
                    200: '#cce2ed',
                    300: '#b0d3e4',
                    400: '#8ec0d9',
                    500: '#6da5c0',
                    600: '#4f8aa8',
                    700: '#356f8c',
                    800: '#215772',
                    900: '#113f56',
                    1000: '#143965',
                  },
                  'nos-pink' : {
                    100 : '#efa0c5',
                    400 : '#e0609b',
                    900 : '#b9266a',
                    1000: '#800b41',
                  },
                  'nos-yellow' : {
                    100: '#f5f1bf',
                    400: '#f3ee9d',
                    900: '#fff780',
                  },
                  'nos-turtoise' : {
                    100:  '#a2e6f2',
                    400:  '#7ae2f5',
                    900:  '#14bbd9',
                    1000: '#008299',
                  }
              },
              spacing: {
                '60pct': '60%',
                '70pct': '70%',
                '80pct': '80%',
                '90pct': '90%',
                '224px': '224px'
              },
              maxWidth: {
                '1/2'  : '50%',
                '90pct': '90%',
              },
              minHeight: {
                'carousel': '654px',
                '1/2'     : '50%',
              },
              transitionDuration: {
                '0'   : '0ms',
                '25'  : '0.25s',
                '2000': '2000ms',
              }
        },
    },

    plugins: [
      require('@tailwindcss/forms'),
      require('tw-elements/dist/plugin'),
    ],
};
