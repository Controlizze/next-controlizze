'use client'

import { useCallback, useState } from 'react'
import { LuMenu } from 'react-icons/lu'

import { Sidebar } from 'components/Sidebar'

export const metadata = {
  title: 'Dashboard - Controlizze'
}

export default function InvestmentPage() {
  const [openSidebar, setOpenSidebar] = useState(false)

  const closeSidebar = useCallback(
    () => setOpenSidebar(!openSidebar),
    [openSidebar]
  )

  return (
    <div className="w-full h-full bg-background-900 overflow-y-hidden">
      {(openSidebar && <Sidebar close={closeSidebar} />) || (
        <header className="fixed top-0 left-0 w-full h-20 px-5 flex items-center gap-2 bg-background-700 shadow-xl shadow-default z-20 md:hidden">
          <button
            className="w-11 h-11 flex justify-center items-center bg-background-500 rounded-full"
            onClick={() => {
              setOpenSidebar(!openSidebar)
            }}
          >
            <LuMenu className="text-white text-2xl" />
          </button>

          <div className="w-fit flex flex-col justify-center gap-0">
            <h3 className="text-xs text-zinc-400 uppercase">Outros</h3>
            <h1 className="text-xl font-bold text-white">Investimento</h1>
          </div>
        </header>
      )}
    </div>
  )
}
