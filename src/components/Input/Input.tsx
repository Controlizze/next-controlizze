import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: 'flex justify-between items-center gap-3 border-2 bg-white rounded border-zinc-400 text-base',
  variants: {
    scale: {
      default: 'px-4 h-12',
      sm: 'px-3 h-10'
    }
  },
  defaultVariants: {
    scale: 'default'
  }
})

export type InputProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    name: string
    placeholder?: string
  }

export function Input({ name, placeholder, scale, ...props }: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      id={name}
      placeholder={placeholder}
      className={input({ scale })}
      {...register(name)}
      {...props}
    />
  )
}
