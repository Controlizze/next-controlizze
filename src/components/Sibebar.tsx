'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiLogOut } from 'react-icons/bi'
import { BsClipboardData, BsCashStack } from 'react-icons/bs'

export function Sidebar() {
  const pathname = usePathname()

  function isLoginOrRegister() {
    return (
      !pathname.includes('login') &&
      !pathname.includes('cadastro') &&
      pathname !== '/'
    )
  }

  return (
    (isLoginOrRegister() && (
      <div className="w-1/5 h-screen flex flex-col bg-background-700">
        <div className="w-full h-full px-6 py-14 flex flex-col items-center gap-28">
          <Image src="/new_logo.png" width={250} height={250} alt="logo" />

          <nav className="w-full flex flex-col gap-6">
            <Link
              href="/dashboard"
              className="w-full px-7 py-4 flex justify-start items-center gap-4 bg-background-500 rounded-xl border-l-4 border-background-500 shadow-lg hover:opacity-75 transition-all text-lg font-semibold text-white fill-white"
            >
              <BsClipboardData className="w-8 h-8" />
              Dashboard
            </Link>

            <Link
              href="/rendimento"
              className="w-full px-7 py-4 flex justify-start items-center gap-4 bg-background-500 rounded-xl border-l-4 border-background-500 shadow-lg hover:opacity-75 transition-all text-lg font-semibold text-white fill-white"
            >
              <BsCashStack className="w-8 h-8" />
              Rendimento
            </Link>
          </nav>
        </div>

        <div className="w-full px-8 py-6 flex justify-between items-center bg-background-500">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 bg-zinc-700 border-2 border-primary-100 rounded-full"></div>

            <span className="text-lg font-semibold text-white">Nome</span>
          </div>

          <BiLogOut className="w-7 h-7 fill-zinc-500" />
        </div>
      </div>
    )) || <></>
  )
}
