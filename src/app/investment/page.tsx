'use client'

import { useState } from 'react'
import { LuMenu } from 'react-icons/lu'

export default function InvestmentPage() {
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
              Investimento
            </h1>
          </div>
        </header>

        <div className="mt-[84px] lg:mt-0 p-8 lg:px-9 lg:py-0 flex flex-1 flex-col justify-between gap-8 lg:gap-4">
          <div className="px-8 py-5 flex flex-col gap-6 bg-background-700 rounded shadow-xl shadow-black/25">
            <div className="flex items-center gap-4 lg:gap-7">
              <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
                Registros
              </h3>
              <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-background-700 rounded-full" />
            </div>

            <div className="w-fit flex items-center gap-4">
              <div className="w-[150px] h-[150px] bg-background-500 rounded"></div>
              <div className="w-[150px] h-[150px] bg-background-500 rounded"></div>
            </div>
          </div>

          <div className="px-8 py-5 flex flex-col gap-6 bg-background-700 rounded shadow-xl shadow-black/25">
            <div className="flex items-center gap-4 lg:gap-7">
              <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
                Registros
              </h3>
              <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-background-700 rounded-full" />
            </div>

            <div>
              <div className="w-[150px] h-[150px] bg-background-500 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
