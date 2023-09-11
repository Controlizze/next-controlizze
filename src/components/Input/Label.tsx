import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  htmlFor: string
}

export function Label({ children, htmlFor }: Props) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-medium text-zinc-400">
      {children}
    </label>
  )
}
