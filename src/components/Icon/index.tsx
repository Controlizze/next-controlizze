import { ComponentProps, ElementType } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const variantIcon = tv({
  base: '',
  variants: {
    size: {
      default: 'w-6 h-6',
      sm: 'w-4 h-4 sm:w-6 h-6',
      md: 'w-8 h-8',
      xl: 'w-11 h-11'
    },
    fill: {
      default: 'fill-black-500',
      primary: 'fill-primary-500',
      white: 'fill-white',
      red: 'fill-red-600',
      green: 'fill-green-600',
      orange: 'fill-orange-600'
    }
  },
  defaultVariants: {
    size: 'default',
    fill: 'default'
  }
})

export type IconProps = ComponentProps<'i'> &
  VariantProps<typeof variantIcon> & {
    icon: ElementType
  }

export function Icon({ icon: Icon, size, fill, className }: IconProps) {
  return <Icon className={variantIcon({ size, fill, className })} />
}
