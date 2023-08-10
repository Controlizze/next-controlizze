import { ComponentProps, ElementType } from 'react'

export type IconProps = ComponentProps<'input'> & {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return <Icon className="w-6 h-6 fill-zinc-400"/>
}
