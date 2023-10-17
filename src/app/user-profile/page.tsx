'use client'

import { useState } from 'react'
import { LuMenu } from 'react-icons/lu'

export default function UserProfile() {
  const [openSidebar, setOpenSidebar] = useState(false)

  // const closeSidebar = useCallback(
  //   () => setOpenSidebar(!openSidebar),
  //   [openSidebar]
  // )

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background-900 overflow-x-hidden">
      <main className="lg:py-8 flex flex-1 flex-col lg:gap-6 2xl:gap-16 bg-background-900">
        <header className="fixed z-50 lg:relative top-0 left-0 w-full px-7 py-5 lg:px-8 lg:py-0 flex items-center gap-2 bg-background-700 lg:bg-transparent shadow-xl lg:shadow-none shadow-black/15">
          <button
            className="w-11 h-11 flex lg:hidden justify-center items-center bg-background-500 rounded-full"
            onClick={() => {
              setOpenSidebar(!openSidebar)
            }}
          >
            <LuMenu className="text-white text-2xl" />
          </button>

          <div className="w-fit flex flex-col justify-center gap-0">
            <h3 className="text-xs lg:text-sm 2xl:text-lg text-zinc-400 uppercase">
              Outros
            </h3>
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-white uppercase">
              Perfil do Usuário
            </h1>
          </div>
        </header>

        <div className="mt-[84px] lg:mt-0 p-8 lg:px-9 lg:py-0 flex flex-1 flex-col justify-between gap-8 lg:gap-4">
          asd
        </div>
      </main>
    </div>
  )
}
