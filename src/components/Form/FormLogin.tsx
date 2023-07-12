'use client'

import { FaArrowRight } from 'react-icons/fa6'

import { Button } from '../Button'
import { Input } from '../Input'

export function FormLogin() {
  return (
    <form className="w-full h-full mt-28 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-4">
        <span className="text-xl font-semibold text-zinc-50">Fazer Login</span>
        <Input.Root sizeX="full">
          <Input.Label label="Email" />
          <Input.Content type="email" />
        </Input.Root>
        <Input.Root sizeX="full">
          <Input.Label label="Senha" />
          <Input.Content type="password" />
        </Input.Root>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Button.Root type="submit" className="w-full h-12">
            <Button.Content text="Entrar" upper="uppercase" />
          </Button.Root>
          <a
            className="w-full h-12 flex justify-center items-center gap-3 rounded-md border-2 border-primary-500 hover:border-primary-300 bg-transparent hover:bg-transparent text-primary-500 hover:text-primary-300 fill-primary-500 hover:fill-primary-300 transition-all"
            href="/cadastro"
          >
            <span className="font-bold uppercase ">Cadastrar</span>
            <FaArrowRight className="w-6 h-6 " />
          </a>
        </div>
        <a
          href="/forget-password"
          className="text-center text-sm text-orange-500 hover:text-orange-300 font-semibold"
        >
          Esqueci minha senha!
        </a>
      </div>
    </form>
  )
}
