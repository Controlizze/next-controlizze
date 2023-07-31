import './globals.scss'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Home - Controlizze'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
