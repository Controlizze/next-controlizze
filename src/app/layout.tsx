import { ReactNode } from 'react'

import './globals.scss'

export const metadata = {
  title: {
    default: 'Controlizze',
    template: '%s | Controlizze'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-900">{children}</div>
      </body>
    </html>
  )
}
