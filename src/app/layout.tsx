'use client'

import { ReactNode } from 'react'

import { Sidebar } from 'components/Sidebar'

import './globals.scss'

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
