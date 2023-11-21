import { InputHTMLAttributes, forwardRef, useId } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const InputRadio = forwardRef<HTMLInputElement, InputProps>(
  ({ name = '', type = '', label = '', ...props }, ref) => {
    const inputId = useId()

    return (
      <div className="flex justify-center items-center gap-1">
        <input
          id={inputId}
          ref={ref}
          name={name}
          type={type}
          className="w-4 h-4 accent-primary-500"
          {...props}
        />
        <label htmlFor={inputId} className="text-white">
          {label}
        </label>
      </div>
    )
  }
)
