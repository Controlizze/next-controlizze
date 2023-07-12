import { InputHTMLAttributes, ReactNode } from 'react'

interface InputRootProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeX: string
  children: ReactNode
}

export function InputRoot({ sizeX, children }: InputRootProps) {
  return <div className={`w-${sizeX}`}>{children}</div>
}
