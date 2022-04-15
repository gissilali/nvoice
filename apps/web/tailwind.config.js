const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const defaultTheme = require('tailwindcss/defaultTheme');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#4B1D3F',
        secondary: '#334155',
        success: '#0fac81',
        danger: '#dc2626',
        warning: '#fbbf24',
      },
      fontFamily: {
        display: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    fontFamily: {
      sans: ['AvenirNext', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
