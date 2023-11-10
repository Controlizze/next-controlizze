import { Metadata } from 'next'
import { ReactNode } from 'react'

import { AuthProvider } from 'contexts/AuthContext'
import './globals.scss'

export const metadata: Metadata = {
  title: {
    default: 'Controlizze',
    template: '%s | Controlizze'
  },
  robots: {
    index: true,
    follow: true
  },
  description: 'The future of your finance.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="min-h-screen bg-900">{children}</div>
        </AuthProvider>
      </body>
    </html>
  )
}
