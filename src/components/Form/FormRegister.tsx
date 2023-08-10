'use client'

import { useForm } from 'react-hook-form'

import { Button } from 'components/Button'
import { InputForm } from 'components/Input'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty('Nome obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .nonempty('E-mail obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  function createUser(data: any) {
    console.log({ ...data })
  }

  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className="w-full flex flex-col gap-14"
    >
      <div className="w-full flex flex-col gap-4">
        <InputForm.root>
          <InputForm.label htmlFor="name">Digite seu nome</InputForm.label>
          <InputForm.form
            type="text"
            placeholder="Nome"
            {...register('name')}
          />
          {errors.name && (
            <InputForm.error>{errors.name.message}</InputForm.error>
          )}
        </InputForm.root>

        <InputForm.root>
          <InputForm.label htmlFor="email">Digite seu e-mail</InputForm.label>
          <InputForm.form
            type="email"
            placeholder="E-mail"
            {...register('email')}
          />
          {errors.email && (
            <InputForm.error>{errors.email.message}</InputForm.error>
          )}
        </InputForm.root>
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
