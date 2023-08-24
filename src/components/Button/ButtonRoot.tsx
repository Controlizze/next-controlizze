import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'flex justify-center items-center gap-3 hover:opacity-75 rounded shadow-lg shadow-dark transition-all',
  variants: {
    fill: {
      default: 'bg-primary-500',
      outline: 'border border-primary-500 ',
      empty: 'bg-transparent'
    },
    size: {
      default: 'w-fit h-8 px-3 sm:h-10 sm:px-6',
      xl: 'w-full h-14 px-8'
    }
  },
  defaultVariants: {
    fill: 'default',
    size: 'default'
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function ButtonRoot({ fill, size, className, ...props }: ButtonProps) {
  return (
    <button className={button({ fill, size, className })} {...props}>
      {props.children}
    </button>
  )
}
