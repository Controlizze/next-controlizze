import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  variants: {
    weight: {
      default: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    },
    color: {
      default: 'text-white',
      gray: 'text-zinc-400',
      black: 'text-black-500',
      primary: 'text-primary-500'
    }
  },
  defaultVariants: {
    size: 'default',
    weight: 'default',
    color: 'default'
  }
})

export type TextProps = ComponentProps<'text'> & VariantProps<typeof text>

export function Text({ weight, color, className, ...props }: TextProps) {
  return (
    <span className={text({ weight, color, className })}>{props.children}</span>
  )
}
