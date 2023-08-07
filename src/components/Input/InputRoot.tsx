import { ComponentProps } from 'react'

export type InputRootProps = ComponentProps<'input'>

export function InputRoot({ ...props }: InputRootProps) {
  return <div className="w-full flex flex-col gap-1">{props.children}</div>
}
