'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import Sidebar from 'components/Sidebar'

import './globals.scss'

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
        <div className="min-h-screen flex flex-col lg:flex-row">
          <Sidebar />
          <div
            className={`${
              isPermittedPathname()
                ? 'w-full lg:w-[75%] 2xl:w-[80%] ml-0 lg:ml-[25%] 2xl:ml-[20%]'
                : 'w-full'
            } min-h-screen flex ${
              !isPermittedPathname() ? '' : 'flex-col'
            } bg-900`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
