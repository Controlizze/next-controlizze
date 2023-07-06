import { InputHTMLAttributes, ElementType } from 'react'

import { twMerge } from 'tailwind-merge'

interface InputIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ElementType
}

export function InputIcon({ icon: Icon, ...rest }: InputIconProps) {
  return <Icon className={twMerge('w-6 h-6 fill-white', rest.className)} />
}
