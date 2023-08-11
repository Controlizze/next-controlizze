import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

export type FieldProps = ComponentProps<'div'>

export function Field({ ...props }: FieldProps) {
  return (
    <div className={twMerge('flex flex-col gap-1', props.className)}>
      {props.children}
    </div>
  )
}
