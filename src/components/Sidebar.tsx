'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import { LuLogOut, LuUser, LuX } from 'react-icons/lu'

import AlertModal from './AlertModal'
import Logo from './Logo'

import { AuthContext } from 'contexts/AuthContext'
import Cookies from 'js-cookie'
import { links } from 'mocks/mocks'

type SidebarProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen
}: SidebarProps) {
  const [showAlertModal, setShowAlertModal] = useState(false)
  const [nameUser, setNameUser] = useState('')

  const { logout } = useContext(AuthContext)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const user_name = Cookies.get('nextfinance.username')
    if (user_name) {
      setNameUser(user_name)
    }
  }, [])

  const linkClass =
    'px-4 py-3.5 flex items-center gap-2 bg-transparent data-[selected=true]:bg-600 border-l-4 border-500 data-[selected=true]:border-primary-500 rounded hover:bg-700 transition-all shadow-md text-white'

  const handleLogout = async () => {
    await logout()
    setShowAlertModal(false)

    router.push('/')
  }

  return (
    <>
      <nav
        className={`fixed inset-y-0 lg:inset-0 left-0 w-full lg:w-[25%] 2xl:w-[20%] h-screen flex flex-col justify-between bg-800 transition-transform transform lg:transform-none z-20 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col p-7 lg:px-7 lg:py-9 gap-16">
          <div className="flex justify-between items-center">
            <Logo />

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden"
            >
              <LuX className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {links.map((item) => (
              <div key={item.id} className="flex flex-col gap-5">
                <span className="text-base font-medium text-zinc-400 uppercase">
                  {item.title}
                </span>
                <div className="flex flex-col gap-5">
                  {item.links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.path}
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

        <div className="h-20 px-7 flex justify-between items-center bg-700">
          <div className="flex justify-center items-center gap-2">
            <div className="w-9 h-9 flex justify-center items-center bg-600 border border-primary-500 rounded-full">
              <LuUser className="text-sm text-zinc-400" />
            </div>
            {/* {user?.photo ? (
            <Image
              src="/user_photo.jfif"
              width={36}
              height={36}
              alt="user_image"
              className="rounded-full"
            />
          ) : (
            
          )} */}
            <span className="text-sm text-white">
              Olá, <span className="font-semibold">{nameUser}</span>
            </span>
          </div>

          <button
            onClick={() => setShowAlertModal(!showAlertModal)}
            className="px-3 py-1 flex justify-center items-center gap-1 border border-primary-600 bg-transparent hover:bg-primary-100/10 active:bg-primary-200/20 rounded-full text-sm text-primary-600 transition-all"
          >
            <LuLogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </nav>

      {showAlertModal && (
        <AlertModal
          text="Você tem certeza que deseja sair?"
          buttons
          actionButton={handleLogout}
          showAlertModal={showAlertModal}
          setShowAlertModal={setShowAlertModal}
        />
      )}
    </>
  )
}
