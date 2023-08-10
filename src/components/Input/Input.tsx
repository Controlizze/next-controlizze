import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: 'flex justify-between items-center gap-3 border-2 bg-white rounded border-zinc-400 text-base',
  variants: {
    scale: {
      default: 'px-4 py-2'
    }
  },
  defaultVariants: {
    scale: 'default'
  }
})

export type InputProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    type: string
    placeholder: string
  }

export function Input({ type, placeholder, scale, ...props }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={input({ scale })}
      {...props}
    />
  )
}
