import { ButtonHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface ButtonContentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  upper: string
}

export function ButtonContent({ text, upper, ...rest }: ButtonContentProps) {
  return (
    <span className={twMerge(`text-white font-bold ${upper}`, rest.className)}>
      {text}
    </span>
  )
}
