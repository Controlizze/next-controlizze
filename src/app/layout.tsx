'use client'

import { NextUIProvider } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Sidebar from 'components/Sidebar'

import { AuthProvider } from 'contexts/AuthContext'

import './globals.scss'

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const isPermittedPathname = () => {
    return (
      pathname.includes('movements') ||
      pathname.includes('investment') ||
      pathname.includes('user-profile')
    )
  }

  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <div className="min-h-screen flex flex-col lg:flex-row">
                <Sidebar />
                <div
                  className={`${
                    isPermittedPathname()
                      ? 'w-full lg:w-[75%] 2xl:w-[80%] ml-0 lg:ml-[25%] 2xl:ml-[20%]'
                      : 'w-full'
                  } min-h-screen flex ${
                    !isPermittedPathname() ? '' : 'flex-col'
                  }`}
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
