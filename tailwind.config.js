/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      brand: '#1da1f2',
      white: '#fff',
      black: '#000',
      'gray-light': '#6e767d',
      'gray-medium': '#2f3336',
      'gray-dark': '#15181c',
      current: 'currentColor',
      transparent: 'transparent'
    },
    screens: {
      sm: '660px',
      md: '882px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [require('@tailwindcss/container-queries')]
};
