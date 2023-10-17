'use client'

import { NextUIProvider } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Sidebar from 'components/Sidebar/Sidebar'

import { AuthProvider } from 'contexts/AuthContext'

import './globals.scss'

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const isPermittedPathname = () => {
    return (
      pathname.includes('login') ||
      pathname.includes('register') ||
      pathname.includes('forgot-password')
    )
  }

  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <div className="min-h-screen lg:flex bg-background-900">
                <Sidebar />
                <div
                  className={
                    !isPermittedPathname()
                      ? 'lg:ml-[25%] 2xl:ml-[20%]'
                      : 'w-full ml-0'
                  }
                >
                  {children}
                </div>
              </div>
            </AuthProvider>
          </QueryClientProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
