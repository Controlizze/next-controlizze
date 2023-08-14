import { ComponentProps } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const card = tv({
  base: 'w-full px-8 py-6 flex flex-col justify-between gap-4 bg-background-700 rounded shadow-lg shadow-dark'
})

export type CardProps = ComponentProps<'div'> & VariantProps<typeof card>

export function Card({ ...props }: CardProps) {
  return <div className={card()}>{props.children}</div>
}
