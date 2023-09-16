import { tv } from '@nextui-org/react'
import { InputHTMLAttributes, forwardRef, useId, useState } from 'react'

import { Action } from './Action'

import { VariantProps } from 'tailwind-variants'

const input = tv({
  base: `w-full pl-3 pr-11 bg-white border-2 border-zinc-400 focus:border-primary-500 rounded outline-none caret-primary-500`,
  variants: {
    scale: {
      default: 'py-2',
      lg: 'py-3'
    }
  },
  defaultVariants: {
    scale: 'default'
  }
})

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> & {
    label?: string
    helperText?: string
    action?: boolean
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name = '',
      type = '',
      helperText = '',
      label = '',
      scale,
      action,
      ...props
    },
    ref
  ) => {
    const [ocultPassword, setOcultPassword] = useState(false)
    const inputId = useId()

    function seePassword() {
      setOcultPassword(!ocultPassword)
    }

    return (
      <fieldset className="flex flex-col gap-0.5">
        <label htmlFor={inputId} className="text-sm text-zinc-200">
          {label}
          {helperText && <span className="ml-1 text-red-500">*</span>}
        </label>
        <div className="relative">
          <input
            id={inputId}
            name={name}
            type={action ? (!ocultPassword ? 'password' : 'text') : type}
            ref={ref}
            {...props}
            className={input({ scale })}
          />
          {action && (
            <Action
              type="button"
              onClick={seePassword}
              ocultPassword={ocultPassword}
            />
          )}
        </div>
        {helperText && (
          <span className="text-xs text-red-500">{helperText}</span>
        )}
      </fieldset>
    )
  }
)
