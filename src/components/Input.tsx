import {
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement
} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  icon?: ReactElement
  sizeX: string
  type: string
  disabled?: boolean
  msg?: string
}

export default function Input({
  children,
  icon,
  sizeX,
  type,
  disabled,
  msg
}: InputProps) {
  return (
    <label className={`w-${sizeX}`}>
      <span className="block text-xs font-medium text-zinc-300">
        {children}
      </span>
      <input
        type={`${type}`}
        disabled={disabled}
        className="w-full mt-1 px-3 py-2 block bg-white border-2 border-slate-300 rounded-md text-xs shadow-sm placeholder-slate-400
        focus:outline-none focus:border-primary-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500
      focus:invalid:border-red-500"
      ></input>
      {icon &&
        cloneElement(icon, { className: 'focus disabled invalid w-6 h-6' })}
      {msg &&
        cloneElement(<span>{msg}</span>, { className: 'text-xs text-red-500' })}
    </label>
  )
}
