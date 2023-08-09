import { ComponentProps, ReactNode } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: 'flex justify-between items-center gap-3 border-2 bg-white rounded border-zinc-400 text-base',
  variants: {
    scale: {
      default: 'px-4 py-2',
      xl: 'px-4 py-3'
    }
  },
  defaultVariants: {
    scale: 'default'
  }
})

export type InputAreaProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    type: string
    placeholder: string
    children?: ReactNode
  }

export function InputArea({
  type,
  placeholder,
  scale,
  children,
  className,
  ...props
}: InputAreaProps) {
  return (
    <div className={input({ scale, className })}>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-none"
        {...props}
      />
      {children}
    </div>
  )
}
