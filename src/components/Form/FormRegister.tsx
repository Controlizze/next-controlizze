import { ComponentProps } from 'react'
import { BsEyeFill } from 'react-icons/bs'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

export type FormRegisterProps = ComponentProps<'form'>

export function FormRegister({ ...props }: FormRegisterProps) {
  return (
    <form action="" className="w-full flex flex-col gap-14" {...props}>
      <div className="w-full flex flex-col gap-4">
        <Input.root>
          <Input.label>Digite seu nome</Input.label>
          <Input.area type="text" placeholder="Nome" scale="xl" />
        </Input.root>

        <Input.root>
          <Input.label>Digite sua data de nascimento</Input.label>
          <Input.area type="date" placeholder="Data de Nascimento" scale="xl" />
        </Input.root>

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

        <div className="flex gap-4">
          <Input.root>
            <Input.label>Digite sua cidade</Input.label>
            <Input.area type="text" placeholder="Cidade" scale="xl" />
          </Input.root>

          <Input.root>
            <Input.label>Digite seu estado</Input.label>
            <Input.area type="text" placeholder="Estado" scale="xl" />
          </Input.root>
        </div>
      </div>

      <Button.root size="xl">
        <Button.text>Acessar</Button.text>
      </Button.root>
    </form>
  )
}
