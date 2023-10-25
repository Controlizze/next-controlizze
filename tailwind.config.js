import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
]
export const theme = {
  extend: {
    colors: {
      100: '#57605D',
      200: '#4E5653 ',
      300: '#444B49',
      400: '#3A403E',
      500: '#303634',
      600: '#272B29',
      700: '#1B1E1D',
      800: '#131515',
      900: '#0A0B0A',
      'primary-100': '#D1F9D6',
      'primary-200': '#A5F4B6',
      'primary-300': '#73E096',
      'primary-400': '#4CC27D',
      'primary-500': '#1D9A5E',
      'primary-600': '#15845A',
      'primary-700': '#0E6E53',
      'primary-800': '#09594A',
      'primary-900': '#054944',
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
      'py-2.5': '10px',
      'py-3': '12px'
    }
  }
}
export const plugins = [nextui()]
