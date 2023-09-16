'use client'

import { useCallback, useState } from 'react'
import { LuMenu } from 'react-icons/lu'

import { Sidebar } from 'components/Sidebar'

export const metadata = {
  title: 'Dashboard - Controlizze'
}

export default function MovementsPage() {
  const [openSidebar, setOpenSidebar] = useState(false)

  const closeSidebar = useCallback(
    () => setOpenSidebar(!openSidebar),
    [openSidebar]
  )

  return (
    <>
      {(openSidebar && <Sidebar close={closeSidebar} />) || (
        <div className="w-full min-h-screen flex flex-col bg-background-900 overflow-hidden">
          <header className="fixed top-0 left-0 w-full h-20 px-5 flex items-center gap-2 bg-background-700 shadow-xl shadow-default z-20">
            <button
              className="w-11 h-11 flex justify-center items-center bg-background-500 rounded-full"
              onClick={() => {
                setOpenSidebar(!openSidebar)
              }}
            >
              <LuMenu className="text-white text-2xl" />
            </button>

            <div className="w-fit flex flex-col justify-center gap-0">
              <h3 className="text-xs text-zinc-400 uppercase">Dashboard</h3>
              <h1 className="text-xl font-bold text-white">Movimentações</h1>
            </div>
          </header>

          <div className="mt-20 flex flex-col gap-4">
            <div className="w-full h-80 bg-slate-500"></div>
            <div className="w-full h-80 bg-slate-500"></div>
          </div>
        </div>
      )}
    </>
  )
}
