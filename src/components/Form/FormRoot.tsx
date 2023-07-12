import { FormHTMLAttributes, ReactNode } from 'react'

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export function FormRoot({ children }: FormRootProps) {
  return <div className="w-full h-full flex flex-col">{children}</div>
}
