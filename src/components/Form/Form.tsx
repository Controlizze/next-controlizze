import { FormHTMLAttributes, ReactNode } from 'react'

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
  col: boolean
}

export const Form = ({ children, col, ...props }: FormProps) => {
  return (
    <form {...props} className={`flex flex-col ${col ? 'gap-4' : 'gap-2'}`}>
      {children}
    </form>
  )
}
