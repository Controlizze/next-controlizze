import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Value({ children }: Props) {
  return (
    <h2 className="text-3xl font-bold text-white text-center">{children}</h2>
  )
}
