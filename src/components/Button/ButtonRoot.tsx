import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'w-fit h-12 px-8 flex justify-center items-center gap-3 rounded hover:opacity-75 transition-all',
  variants: {
    type: {
      default: 'bg-primary-500',
      outline: 'border border-primary-500 ',
      empty: 'bg-transparent'
    }
  },
  defaultVariants: {
    type: 'default'
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function ButtonRoot({ type, className, ...props }: ButtonProps) {
  return (
    <button className={button({ type, className })} {...props}>
      {props.children}
    </button>
  )
}
