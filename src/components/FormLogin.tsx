import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

import { Button } from './Button'
import Input from './Input'

export default function FormLogin() {
  return (
    <>
      <div className="w-full">
        <form className="w-full flex flex-col items-center gap-4" action="">
          <span className="text-xl font-semibold text-zinc-50">
            Fazer Login
          </span>
          <Input sizeX="full" type="email">
            Email
          </Input>
          <Input sizeX="full" type="password">
            Senha
          </Input>
        </form>
      </div>
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Button.Root className="w-full h-12">
            <Button.Content text="Entrar" upper="uppercase" />
          </Button.Root>

          <Link
            className="w-full h-12 flex justify-center items-center gap-3 border-2 border-primary-500 hover:border-primary-300 bg-transparent hover:bg-transparent text-primary-500 hover:text-primary-300 fill-primary-500 hover:fill-primary-300 transition-all"
            href="/cadastro"
          >
            <span className="font-bold uppercase ">Cadastrar</span>
            <FaArrowRight className="w-6 h-6 " />
          </Link>
        </div>

        <Link
          href="/forget-password"
          className="text-center text-sm text-orange-500 hover:text-orange-300 font-semibold"
        >
          Esqueci minha senha!
        </Link>
      </div>
    </>
  )
}
