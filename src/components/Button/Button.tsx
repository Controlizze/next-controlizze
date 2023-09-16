import { ButtonHTMLAttributes, ReactNode } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'h-12 px-3 flex justify-center items-center rounded shadow-lg shadow-default transition-all text-sm lg:text-base font-semibold uppercase',
  variants: {
    fill: {
      default: 'bg-primary-500 hover:opacity-75 text-black-500',
      outline: 'border border-primary-500 hover:opacity-75 text-primary-500',
      disabled: 'bg-zinc-700 text-zinc-500'
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

export const Button = ({
  children,
  fill,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={button({ fill, className })} {...props}>
      {children}
    </button>
  )
}
