import Link from 'next/link'
import { ComponentProps } from 'react'
import { BsEyeFill } from 'react-icons/bs'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

export type FormLoginProps = ComponentProps<'form'>

export function FormLogin({ ...props }: FormLoginProps) {
  return (
    <form action="" className="w-full flex flex-col gap-14" {...props}>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-4">
          <Input.root>
            <Input.label>Digite seu e-mail</Input.label>
            <Input.area type="text" placeholder="E-mail" scale="xl" />
          </Input.root>

          <Input.root>
            <Input.label>Digite sua senha</Input.label>
            <Input.area type="password" placeholder="Senha" scale="xl">
              <BsEyeFill className="w-6 h-6 fill-zinc-400" />
            </Input.area>
          </Input.root>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 rounded" />
            <span className="text-xs text-zinc-400">Lembrar minha senha</span>
          </div>

          <Link
            href="/forget-password"
            className="text-xs text-zinc-400 hover:text-zinc-500 transition-all"
          >
            Esqueci minha senha!
          </Link>
        </div>
      </div>

      <Button.root size="xl">
        <Button.text>Acessar</Button.text>
      </Button.root>

      <div className="w-full flex justify-center items-center gap-2">
        <span className="text-sm text-zinc-400">Não tem uma conta?</span>
        <Link
          href="/cadastro"
          className="text-sm text-primary-500 hover:opacity-75 transition-all"
        >
          Cadastre-se!
        </Link>
      </div>
    </form>
  )
}
