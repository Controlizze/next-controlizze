import Image from 'next/image'
import { BiLogOut } from 'react-icons/bi'
import {
  BsClipboardData,
  BsCashStack,
  BsFillPersonFill,
  BsChevronRight
} from 'react-icons/bs'

import Container from 'components/Container'

export const metadata = {
  title: 'Rendimento - Controlizze'
}

export default function Rendimento() {
  return (
    <Container className="flex">
      <div className="w-1/5 h-full p-10 flex flex-col justify-between items-center bg-black-700">
        <div className="w-full flex flex-col items-center gap-24">
          <Image src="/logo_nova.png" width={272} height={272} alt="logo" />

          <nav className="relative w-full py-14 flex flex-col gap-6">
            <div className="absolute top-0 left-0 w-full h-1 rounded-full bg-black-500"></div>

            <a
              href="/dashboard"
              className="w-full px-7 py-4 flex justify-start items-center gap-4 bg-black-500 rounded-full shadow-lg hover:opacity-80 transition-all text-lg font-semibold text-black-100 fill-black-100"
            >
              <BsClipboardData className="w-8 h-8" />
              Dashboard
            </a>
            <a
              href="/rendimento"
              className="w-full px-7 py-4 flex justify-start items-center gap-4 bg-primary-300 rounded-full shadow-lg hover:opacity-80 transition-all text-lg font-semibold text-white fill-white"
            >
              <BsCashStack className="w-8 h-8" />
              Rendimento
            </a>

            <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-black-500"></div>
          </nav>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <div className="w-11 h-11 flex justify-center items-center bg-black-500 rounded-full border-4 border-primary-100">
              <BsFillPersonFill className="w-4 h-4 fill-black-300" />
            </div>
            <span className="text-base font-medium text-white">Richard</span>
          </div>

          <BiLogOut className="w-7 h-7 fill-white" />
        </div>
      </div>

      <div className="w-full h-full p-14 flex flex-col gap-14">
        <div className="w-full flex items-center gap-2">
          <BsChevronRight className="w-3 h-3 fill-black-300" />
          <span className="text-lg font-medium text-black-300">Rendimento</span>
        </div>

        <div className="w-full h-full flex flex-col gap-8">
          <div className="w-full h-full p-8 flex flex-col gap-8 bg-black-700 rounded-2xl shadow-xl">
            <div className="w-full flex items-center">
              <span className="text-2xl font-semibold text-white">
                Registros
              </span>
            </div>

            <div className="w-[1408px] h-full flex gap-4">
              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>
            </div>
          </div>

          <div className="w-full h-full p-8 flex flex-col gap-8 bg-black-700 rounded-2xl shadow-xl">
            <div className="w-full flex items-center">
              <span className="text-2xl font-semibold text-white">
                Registros
              </span>
            </div>

            <div className="w-[1408px] h-full flex gap-4">
              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-black-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
