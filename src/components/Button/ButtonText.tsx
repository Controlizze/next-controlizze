import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: 'font-bold',
  variants: {
    color: {
      default: 'text-black-500',
      primary: 'text-primary-500',
      white: 'text-white'
    },
    size: {
      default: 'text-base',
      xl: 'text-xl',
      sm: 'text-sm'
    },
    transform: {
      default: 'uppercase',
      lower: 'capitalize'
    }
  },
  defaultVariants: {
    color: 'default',
    transform: 'default'
  }
})

export type ButtonTextProps = ComponentProps<'text'> & VariantProps<typeof text>

export function ButtonText({
  color,
  size,
  transform,
  className,
  ...props
}: ButtonTextProps) {
  return (
    <span className={text({ color, size, transform, className })}>
      {props.children}
    </span>
  )
}
