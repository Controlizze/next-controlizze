import { InputHTMLAttributes, forwardRef, useId } from 'react'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name = '', type = '', label = '', ...props }, ref) => {
    const inputId = useId()

    return (
      <div className="flex items-center gap-1">
        <input
          id={inputId}
          name={name}
          type={type}
          ref={ref}
          className="w-4 h-4 rounded accent-primary-500"
          {...props}
        />
        <label htmlFor={inputId} className="text-xs text-zinc-200">
          {label}
        </label>
      </div>
    )
  }
)
