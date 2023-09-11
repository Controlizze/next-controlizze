import { ComponentProps } from 'react'

type Props = ComponentProps<'input'> & {
  id: string
  type: string
  placeholder: string
}

export function Camp({ id, type, placeholder }: Props) {
  return (
    <input
      id={id}
      type={type}
      className="w-full h-full px-3 py-2 rounded outline-none"
      placeholder={placeholder}
    />
  )
}
