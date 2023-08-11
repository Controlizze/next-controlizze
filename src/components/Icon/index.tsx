import { ElementType } from 'react'

import { tv } from 'tailwind-variants'

const icon = tv({
  base: '',
  variants: {
    default: 'w-6 h-6 fill-black-500'
  }
})

export type IconProps = {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return <Icon />
}
