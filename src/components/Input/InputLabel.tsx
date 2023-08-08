import { ComponentProps } from 'react'

export type InputLabelProps = ComponentProps<'label'> & {
  htmlFor?: string
}

export function InputLabel({ htmlFor, ...props }: InputLabelProps) {
  return (
    <label htmlFor={htmlFor} className=" text-xs text-zinc-400" {...props}>
      {props.children}
    </label>
  )
}
