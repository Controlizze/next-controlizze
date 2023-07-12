'use client'

import { Button } from '../Button'
import { Input } from '../Input'

export function FormRegister() {
  return (
    <form className="w-full h-full mt-12 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-4">
        <span className="text-xl font-semibold text-zinc-50">
          Fazer Cadastro
        </span>
        <Input.Root sizeX="full">
          <Input.Label label="Nome" />
          <Input.Content type="text" />
        </Input.Root>
        <Input.Root sizeX="full">
          <Input.Label label="Data de Nascimento" />
          <Input.Content type="text" />
        </Input.Root>
        <Input.Root sizeX="full">
          <Input.Label label="Email" />
          <Input.Content type="email" />
        </Input.Root>
        <Input.Root sizeX="full">
          <Input.Label label="Senha" />
          <Input.Content type="password" />
        </Input.Root>
        <div className="w-full flex justify-between gap-2">
          <Input.Root sizeX="full">
            <Input.Label label="Cidade" />
            <Input.Content type="text" />
          </Input.Root>
          <Input.Root sizeX="28">
            <Input.Label label="Estado" />
            <Input.Content type="text" />
          </Input.Root>
        </div>
      </div>
      <Button.Root
        onClick={() => {
          console.log('teste')
        }}
        className="w-full h-12"
      >
        <Button.Content text="Cadastrar" upper="uppercase" />
      </Button.Root>
    </form>
  )
}
