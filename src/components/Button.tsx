import { ButtonHTMLAttributes, ReactNode } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'h-12 px-3 flex justify-center items-center rounded shadow-lg shadow-black/20 transition-all text-sm lg:text-base font-semibold uppercase',
  variants: {
    fill: {
      default:
        'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 text-black-500 disabled:text-primary-700',
      outline:
        'border border-primary-600 bg-transparent hover:bg-primary-100/10 active:bg-primary-200/20 text-primary-600',
      empty:
        'bg-transparent text-white hover:text-zinc-500 active:text-zinc-600',
      error:
        'border border-red-600 bg-transparent hover:bg-red-100/10 active:bg-red-200/20 text-red-600'
    }
  },
  defaultVariants: {
    fill: 'default'
  }
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    children: ReactNode
  }

export default function Button({
  children,
  fill,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ fill, className })} {...props}>
      {children}
    </button>
  )
}
