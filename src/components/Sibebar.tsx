import Image from 'next/image'
import { BiLogOut } from 'react-icons/bi'
import { BsClipboardData, BsCashStack } from 'react-icons/bs'

export function Sidebar() {
  return (
    <div className="w-1/5 h-full flex flex-col bg-neutral-900">
      <div className="w-full h-full px-6 py-14 flex flex-col items-center gap-28">
        <Image src="/logo_nova.png" width={250} height={250} alt="logo" />

        <nav className="w-full flex flex-col gap-6">
          <a
            href="/dashboard"
            className="w-full px-7 py-4 flex justify-start items-center gap-4 bg-neutral-900 rounded-xl border-l-4 border-neutral-900 shadow-lg hover:opacity-80 transition-all text-lg font-semibold text-white fill-white"
          >
            <BsClipboardData className="w-8 h-8" />
            Dashboard
          </a>

          <a
            href="/rendimento"
            className="w-full px-7 py-4 flex justify-start items-center gap-4 bg-neutral-900 rounded-xl border-l-4 border-neutral-900 shadow-lg hover:opacity-80 transition-all text-lg font-semibold text-white fill-white"
          >
            <BsCashStack className="w-8 h-8" />
            Rendimento
          </a>
        </nav>
      </div>

      <div className="w-full px-8 py-6 flex justify-between items-center bg-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 bg-neutral-700 border-2 border-primary-100 rounded-full"></div>

          <span className="text-lg font-semibold text-white">Nome</span>
        </div>

        <BiLogOut className="w-7 h-7 fill-neutral-500" />
      </div>
    </div>
  )
}
