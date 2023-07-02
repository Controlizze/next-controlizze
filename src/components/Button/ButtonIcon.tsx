import { ButtonHTMLAttributes, ElementType } from 'react'

import { twMerge } from 'tailwind-merge'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
  return <Icon className={twMerge('w-6 h-6 fill-white', rest.className)} />
}
