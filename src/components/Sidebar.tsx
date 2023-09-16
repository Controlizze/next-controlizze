'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps, MouseEventHandler } from 'react'
import { LuLogOut, LuXCircle } from 'react-icons/lu'

import { links } from 'data/mocks'

type SidebarProps = ComponentProps<'button'> & {
  close: MouseEventHandler<HTMLButtonElement>
}

export function Sidebar({ close }: SidebarProps) {
  const pathname = usePathname()

  const linkClass =
    'px-4 py-3.5 flex items-center gap-2 bg-transparent data-[selected=true]:bg-background-500 border-l-4 border-background-500 data-[selected=true]:border-primary-500 rounded hover:opacity-75 transition-all shadow-md text-white'

  return (
    <aside className="abosolute top-0 left-0 w-full lg:w-[25%] 2xl:w-[20%] h-screen flex flex-col bg-background-700 z-20">
      <div className="flex flex-auto flex-col p-7 lg:px-7 lg:py-9 gap-16">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <Image src={'/icon.png'} width={28} height={28} alt="emblem" />
            <span
              style={{ fontFamily: 'Russo One' }}
              className="text-3xl text-white"
            >
              Controlizze
            </span>
          </div>

          <button onClick={close} className="lg:hidden">
            <LuXCircle className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {links.map((item) => (
            <div key={item.id} className="flex flex-col gap-5">
              <span className="text-base font-semibold text-zinc-500 uppercase">
                {item.title}
              </span>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.id}
                    href={`/${link.path}`}
                    data-selected={pathname.includes(link.path)}
                    className={linkClass}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-20 px-7 flex justify-between items-center bg-background-500">
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/user_photo.jfif"
            width={36}
            height={36}
            alt="user_image"
            className="rounded-full"
          />
          <span className="text-sm text-white">
            Olá, <span className="font-semibold">Richard</span>
          </span>
        </div>

        <button className="w-7 h-7 flex justify-center items-center border border-primary-500 rounded-full">
          <LuLogOut className="w-4 h-4 text-primary-500" />
        </button>
      </div>
    </aside>
  )
}
