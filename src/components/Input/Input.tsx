import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

import { VariantProps, tv } from 'tailwind-variants'

const disabled =
  'disabled:bg-zinc-100 disabled:border-zinc-200 disabled:placeholder:text-zinc-300'

const focus = 'focus:border-primary-500 focus:caret-primary-500'

const invalid =
  'invalid:focus:border-red-500 invalid:caret-red-500 invalid:text-red-500'

const input = tv({
  base: `w-full flex justify-between items-center gap-3 border-2 bg-white border-zinc-400 text-base outline-none ${focus} ${invalid} ${disabled}`,
  variants: {
    scale: {
      default: 'px-4 h-12',
      sm: 'px-3 h-10'
    },
    rounded: {
      default: 'rounded',
      start: 'rounded-s'
    }
  },
  defaultVariants: {
    scale: 'default',
    rounded: 'default'
  }
})

export type InputProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    name: string
    placeholder?: string
  }

export function Input({
  name,
  placeholder,
  scale,
  rounded,
  className,
  ...props
}: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      id={name}
      placeholder={placeholder}
      className={input({ scale, rounded, className })}
      {...register(name)}
      {...props}
    />
  )
}
