import { BaseHTMLAttributes, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

interface ContainerProps extends BaseHTMLAttributes<HTMLBaseElement> {
  children: ReactNode
}

export default function Container({ children, ...rest }: ContainerProps) {
  return (
    <div
      className={twMerge('w-full h-screen bg-background-900', rest.className)}
    >
      {children}
    </div>
  )
}
