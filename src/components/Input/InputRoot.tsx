import { InputHTMLAttributes, ReactNode } from 'react'

interface InputRootProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeX: string
  children: ReactNode
}

export function InputRoot({ sizeX, children }: InputRootProps) {
  return <label className={`w-${sizeX}`}>{children}</label>
}
