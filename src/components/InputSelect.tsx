import { SelectHTMLAttributes, forwardRef, useId } from 'react'

type InputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  data: any
  className?: string
}

export const InputSelect = forwardRef<HTMLBaseElement, InputProps>(
  ({ label = '', name = '', data, className, ...props }, ref) => {
    const inputId = useId()

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <label htmlFor={inputId} className="text-sm text-zinc-200">
          {label}
        </label>
        <select
          id={inputId}
          name={name}
          ref={ref as React.RefObject<HTMLSelectElement>}
          className="px-3 py-0.5 bg-white border-2 border-zinc-400 focus:border-primary-500 rounded outline-none text-sm"
          {...props}
        >
          <option value="" disabled>
            Selecione
          </option>
          {data?.map((option: any) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    )
  }
)
