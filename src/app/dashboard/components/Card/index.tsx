import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const card = tv({
  base: 'w-full px-8 py-6 justify-between bg-background-700 rounded shadow-lg shadow-dark',
  variants: {
    flex: {
      default: 'flex flex-col gap-4',
      row: 'flex items-center gap-10'
    }
  },
  defaultVariants: {
    flex: 'default'
  }
})

export type CardProps = ComponentProps<'div'> & VariantProps<typeof card>

export function Card({ flex, className, ...props }: CardProps) {
  return <div className={card({ flex, className })}>{props.children}</div>
}
