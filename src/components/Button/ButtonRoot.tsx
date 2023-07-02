import { ButtonHTMLAttributes, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonRoot({ children, ...rest }: ButtonRootProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'w-full h-full flex justify-center items-center gap-3 bg-primary-500 hover:bg-primary-300 rounded-md shadow-md transition-all',
        rest.className
      )}
    >
      {children}
    </button>
  )
}
