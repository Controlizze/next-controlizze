import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Field({ children }: Props) {
  return (
    <fieldset className="w-full flex flex-col gap-0.5">{children}</fieldset>
  )
}
