/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#5A1826',
          deep: '#3E1019',
          light: '#7A2436',
        },
        gold: {
          DEFAULT: '#C6A15B',
          soft: '#D9BE8C',
          deep: '#9C7C3E',
        },
        ivory: '#F6F1E7',
        sand: '#EFE4D2',
        peach: '#E9C3AC',
        champagne: '#DCC9A3',
        ink: '#2B1D18',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"EB Garamond"', 'serif'],
        label: ['"Marcellus"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
}
