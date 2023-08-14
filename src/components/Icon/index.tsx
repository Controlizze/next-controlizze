import { ElementType } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const variantIcon = tv({
  base: '',
  variants: {
    size: {
      default: 'w-6 h-6',
      sm: 'w4 h-4'
    },
    fill: {
      default: 'fill-black-500',
      primary: 'fill-primary-500',
      white: 'fill-white'
    }
  },
  defaultVariants: {
    size: 'default',
    fill: 'default'
  }
})

export type IconProps = VariantProps<typeof variantIcon> & {
  icon: ElementType
}

export function Icon({ icon: Icon, size, fill }: IconProps) {
  return <Icon className={variantIcon({ size, fill })} />
}
