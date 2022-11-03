/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'my-font': ['Roboto'],
      },
      colors: {
        'my-white': '#fcfcfc',
        'my-blue': '#7581A2',
      },
    },
  },
  plugins: [],
};
