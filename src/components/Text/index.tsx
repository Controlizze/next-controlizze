import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  variants: {
    size: {
      default: 'text-base',
      xs: 'text-xs',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-2xl',
      xxxl: 'text-3xl',
      XL: 'text-4xl',
      XXL: 'text-5xl',
      XXXL: 'text-6xl'
    },
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

export function Text({ size, weight, color, className, ...props }: TextProps) {
  return (
    <span className={text({ size, weight, color, className })}>
      {props.children}
    </span>
  )
}
