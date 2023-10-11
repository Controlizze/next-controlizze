import { tv } from '@nextui-org/react'
import { InputHTMLAttributes, forwardRef, useId, useState } from 'react'

import { Action } from './Action'

import { VariantProps } from 'tailwind-variants'

const input = tv({
  base: `w-full bg-white border-2 border-zinc-400 focus:border-primary-500 rounded outline-none caret-primary-500`,
  variants: {
    scale: {
      default: 'py-2',
      sm: 'py-1 text-sm'
    },
    action: {
      false: 'px-3',
      true: 'pl-3 pr-11'
    }
  },
  defaultVariants: {
    scale: 'default',
    action: false
  }
})

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input> & {
    width?: string
    label?: string
    helperText?: string
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name = '',
      type = '',
      helperText = '',
      label = '',
      width = 'w-full',
      scale,
      action,
      ...props
    },
    ref
  ) => {
    const inputId = useId()
    const [ocultPassword, setOcultPassword] = useState(false)

    function seePassword() {
      setOcultPassword(!ocultPassword)
    }

    return (
      <fieldset className={`${width} flex flex-col gap-0.5`} {...props}>
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
            className={input({ scale, action })}
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
