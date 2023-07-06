import { InputHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  disabled?: boolean
}

export function InputContent({ type, disabled, ...rest }: InputContentProps) {
  return (
    <input
      type={`${type}`}
      disabled={disabled}
      className={twMerge(
        'w-full mt-1 px-3 py-2 block bg-white border-2 border-slate-300 rounded-md text-xs shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 focus:invalid:border-red-500',
        rest.className
      )}
    />
  )
}
