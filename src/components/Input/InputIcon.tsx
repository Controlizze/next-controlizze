import { ComponentProps, ElementType } from 'react'

export type InputIconProps = ComponentProps<'input'> & {
  icon: ElementType
}

export function InputIcon({ icon: Icon }: InputIconProps) {
  return <Icon />
}
