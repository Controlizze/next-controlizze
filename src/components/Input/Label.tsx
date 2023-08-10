import { ComponentProps } from 'react'

export type LabelProps = ComponentProps<'label'> & {
  htmlFor: string
}

export function Label({ htmlFor, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-xs text-zinc-400" {...props}>
      {props.children}
    </label>
  )
}
