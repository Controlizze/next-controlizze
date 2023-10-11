import { FormHTMLAttributes, ReactNode } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const form = tv({
  base: 'flex',
  variants: {
    direction: {
      default: 'flex-col gap-4',
      row: 'flex-col 2xl:flex-row gap-10'
    }
  },
  defaultVariants: {
    direction: 'default'
  }
})

type FormProps = FormHTMLAttributes<HTMLFormElement> &
  VariantProps<typeof form> & {
    children: ReactNode
  }

export const Form = ({
  children,
  direction,
  className,
  ...props
}: FormProps) => {
  return (
    <form {...props} className={form({ direction, className })}>
      {children}
    </form>
  )
}
