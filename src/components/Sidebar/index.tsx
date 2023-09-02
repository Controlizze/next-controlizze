'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuLogOut, LuXCircle } from 'react-icons/lu'

import { links } from 'data/mocks'

export function Sidebar() {
  const pathname = usePathname()

  function isLoginOrRegister() {
    return (
      !pathname.includes('login') &&
      !pathname.includes('register') &&
      pathname !== '/'
    )
  }

  const linkClass =
    'px-4 py-3.5 flex items-center gap-2 bg-transparent data-[selected=true]:bg-background-500 border-l-4 border-background-500 data-[selected=true]:border-primary-500 rounded hover:opacity-75 transition-all shadow-md text-white'

  return (
    (isLoginOrRegister() && (
      <aside className="w-full h-screen flex-col bg-background-700">
        <div className="flex-1 flex flex-col p-7 gap-16">
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

            <button>
              <LuXCircle className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {links.map((item) => (
              <div key={item.title} className="flex flex-col gap-5">
                <span className="text-base font-semibold text-zinc-500 uppercase">
                  {item.title}
                </span>
                <div className="flex flex-col gap-5">
                  {item.links.map((link) => (
                    <Link
                      key={link.name}
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
    )) || <></>
  )
}
