/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js, css}'],
  extends: ['@stanleySimeon/tailwindcss-config', 'stylelint-config-standard-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#272A31',
        secondary: '#EC5242',
        Gray: '#D3D3D3',
        white: '#FFFFFF',
      },
      container: {
        center: true,
        width: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1440px',
          '2xl': '2560px',
        },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        spacing: {
          sm: '8px',
          md: '16px',
          lg: '24px',
          xl: '48px',
        },
        borderRadius: {
          none: '0',
          sm: '0.125rem',
          DEFAULT: '0.25rem',
          md: '0.375rem',
          lg: '0.5rem',
          full: '9999px',
          large: '12px',
        },
      },
    },
  },
  plugins: [],
};
