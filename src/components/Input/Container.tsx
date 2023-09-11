import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Container({ children }: Props) {
  return <div className="relative w-full flex">{children}</div>
}
