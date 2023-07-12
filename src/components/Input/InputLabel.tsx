import { InputHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function InputLabel({ label, ...rest }: InputLabelProps) {
  return (
    <label
      htmlFor=""
      className={twMerge(
        'block text-xs font-medium text-zinc-300',
        rest.className
      )}
    >
      {label}
    </label>
  )
}
