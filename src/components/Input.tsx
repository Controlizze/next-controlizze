import { InputHTMLAttributes, ReactElement, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  icon?: ReactElement
  variant?: 'default' | 'error'
  msg?: string
}

export const Input = (props: InputProps) => {
  const { variant } = props

  switch (variant) {
    case 'error':
      return <h1>Error</h1>
    case 'default':
      return <h1>Default</h1>
  }
}

export const DefaultInput = (props: InputProps) => {
  const { children, icon, msg } = props

  return (
    <div className="w-full flex flex-col">
      <label className="text-xs font-normal text-zinc-50" htmlFor="">
        {children}
      </label>
      <input className="w-full h-8 px-2 rounded-md outline-none" type="text">
        {icon}
      </input>
      <span>{msg}</span>
    </div>
  )
}
