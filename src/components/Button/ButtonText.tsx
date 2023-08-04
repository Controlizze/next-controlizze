import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: 'text-base font-bold',
  variants: {
    color: {
      default: 'text-black-500',
      primary: 'text-primary-500',
      white: 'text-white'
    },
    transform: {
      default: 'uppercase',
      lower: 'lowercase'
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
  transform,
  className,
  ...props
}: ButtonTextProps) {
  return (
    <span className={text({ color, transform, className })}>
      {props.children}
    </span>
  )
}
