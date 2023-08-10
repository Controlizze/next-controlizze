'use client'

import { useForm } from 'react-hook-form'

import { Button } from 'components/Button'

export function FormRegister() {
  const { register, handleSubmit } = useForm()

  function createUser(data: any) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className="w-full flex flex-col gap-14"
    >
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xs text-zinc-400">
            Digite seu nome
          </label>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-4 py-3 flex justify-between items-center gap-3 border-2 bg-white rounded border-zinc-400 text-base outline-none"
              {...register('name')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs text-zinc-400">
            Digite seu e-mail
          </label>
          <div className="flex justify-between items-center">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 flex justify-between items-center gap-3 border-2 bg-white rounded border-zinc-400 text-base outline-none"
              {...register('email')}
            />
          </div>
        </div>
      </div>
      {/* <Input.root>
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
      </div> */}

      <Button.root type="submit" size="xl">
        <Button.text>Acessar</Button.text>
      </Button.root>
    </form>
  )
}
