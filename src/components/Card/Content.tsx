import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Content({ children }: Props) {
  return <div className="flex justify-between items-center">{children}</div>
}
