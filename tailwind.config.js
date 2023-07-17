/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#86FB73',
        'primary-300': '#64ED5D',
        'primary-500': '#36CF3C',
        'primary-700': '#27B239',
        'primary-900': '#1B9535',
        'secundary-100': '#FFB26B',
        'secundary-300': '#FF9346',
        'secundary-500': '#FF6109',
        'secundary-700': '#DB4506',
        'secundary-900': '#B72E04',
        'black-100': '#BEBEBE',
        'black-300': '#7D7D7D',
        'black-500': '#111111',
        'black-700': '#0A0A0A',
        'black-900': '#080808'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
