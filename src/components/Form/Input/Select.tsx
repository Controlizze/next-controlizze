import { tv } from '@nextui-org/react'
import { SelectHTMLAttributes, forwardRef, useId } from 'react'

import { VariantProps } from 'tailwind-variants'

const select = tv({
  base: `w-full bg-white border-2 border-zinc-400 focus:border-primary-500 rounded outline-none caret-primary-500`,
  variants: {
    scale: {
      default: 'py-2',
      sm: 'py-1 text-sm'
    }
  },
  defaultVariants: {
    scale: 'default'
  }
})

type InputProps = SelectHTMLAttributes<HTMLSelectElement> &
  VariantProps<typeof select> & {
    width?: string
    label?: string
    helperText?: string
  }

export const Select = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name = '',
      helperText = '',
      label = '',
      width = 'w-full',
      scale,
      ...props
    },
    ref
  ) => {
    const inputId = useId()

    return (
      <fieldset className={`${width} flex flex-col gap-0.5`}>
        <label htmlFor={inputId} className="text-sm text-zinc-200">
          {label}
          {helperText && <span className="ml-1 text-red-500">*</span>}
        </label>
        <select
          id={inputId}
          name={name}
          placeholder="Selecione"
          {...props}
          className={select({ scale })}
        >
          <option value="" disabled selected className="text-zinc-400">
            Selecione
          </option>
          <option value="lazer">Lazer</option>
        </select>
      </fieldset>
    )
  }
)
