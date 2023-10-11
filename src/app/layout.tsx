'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import './globals.scss'

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            {/* <Sidebar /> */}
            {children}
          </QueryClientProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
