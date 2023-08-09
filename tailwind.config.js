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
        'primary-100': '#73E096',
        'primary-300': '#4CC27D',
        'primary-500': '#1D9A5E',
        'primary-700': '#0E6E53',
        'primary-900': '#054944',
        'background-500': '#1a1a1f',
        'background-700': '#111115',
        'background-900': '#0B0B0E',
        'black-100': '#B7B7B7',
        'black-300': '#707070',
        'black-500': '#111111'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      padding: {
        'py-3': '12px'
      }
    }
  },
  plugins: []
}
