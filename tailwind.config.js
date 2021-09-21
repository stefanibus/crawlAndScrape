const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      'logo': '1.4rem',
      'heroImg': '1200px' 
    },
    extend: {
      backgroundImage: theme => ({
        'hero-about': "url('https://crawl-and-scrape.vercel.app/assets/images/scraping-animated_.gif')", 
       }),
      colors: { 
        
         teal: colors.teal,
        'light-blue': colors.sky,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        amber: colors.amber, 
        rose: colors.rose,
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        }, 
        code: {
          100: '#00ffb8'
        },  
        customred: {
          100: '#e64a42'
        },  
        customblue: { 
          50: '#fcfeff', 
          100: '#304f84', 
          150: '#05177f', 
          200: '#17367d',
          300: '#120e34', 
          400: '#231f53',
          500: '#4575c4', 
        },
      },
    },
  },
  variants: {
    extend: { 
     divideWidth: ['hover', 'focus'],
    }},
  plugins: [],
};
