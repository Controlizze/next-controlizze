import Image from 'next/image'
import Link from 'next/link'

import { Button } from './Button'

export default function FormLogin() {
  return (
    <div className="w-[368px] h-[488px] sm:w-[390px] sm:h-[510px] xl:w-[432px] xl:h-[552px] flex flex-col bg-zinc-900 rounded-3xl shadow-lg">
      <div className="w-full p-10 sm:p-14 xl:p-18 flex flex-1 flex-col justify-between items-center">
        <Image src="/logo.png" width={318} height={60} alt="Logo" />
        <form className="w-full flex flex-col items-center gap-4" action="">
          <span className="text-xl sm:text-xl xl:text-2xl font-semibold text-zinc-50">
            Fazer Login
          </span>

          {/* dois inputs */}
        </form>
        <Button sizeX="full" sizeY="12" variant="default" upperText="uppercase">
          Entrar
        </Button>
      </div>
      <div className="w-full h-16 px-10 py-2 sm:px-14 sm:py-6 xl:px-18 xl:py-10 flex items-center gap-2 bg-zinc-800 rounded-b-3xl rounded-bl-3xl">
        <span className="text-zinc-50 text-xs sm:text-sm">
          Ainda não tem uma conta?
        </span>
        <Link
          className="text-orange-500 hover:text-orange-400 transition-all text-xs sm:text-sm font-semibold"
          href="/cadastro"
        >
          Crie uma!
        </Link>
      </div>
    </div>
  )
}
