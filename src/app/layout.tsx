import { ReactNode } from 'react'

import './globals.scss'
import { Sidebar } from 'components/Sidebar'

export const metadata = {
  title: 'Home - Controlizze'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
