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
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
