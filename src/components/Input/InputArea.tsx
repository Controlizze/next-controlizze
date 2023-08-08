import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: 'flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-zinc-400 text-base',
  variants: {
    size: {
      default: 'px-3 py-2',
      xl: 'px-6 py-4'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export type InputAreaProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    type: string
    placeholder: string
  }

export function InputArea({
  type,
  placeholder,
  size,
  className,
  ...props
}: InputAreaProps) {
  return (
    <div className={input({ size, className })}>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-none"
        {...props}
      />
      {props.children}
    </div>
  )
}
