'use client'

import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { InputForm } from 'components/Input'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createUserSchema = z.object({
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
    .toLowerCase(),

  password: z
    .string()
    .nonempty({
      message: 'Senha é obrigatória'
    })
    .min(6, {
      message: 'A senha precisa ter no mínimo 6 caracteres'
    }),

  city: z
    .string()
    .nonempty('Cidade obrigatória')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),

  state: z
    .string()
    .nonempty('Estado obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    })
})

type CreateUserData = z.infer<typeof createUserSchema>

export function FormRegister() {
  const [ocultPassord, setOcultPassword] = useState(false)

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema)
  })

  function createUser(data: any) {
    console.log({ ...data })
  }

  const { handleSubmit } = createUserForm

  function handlePassword() {
    setOcultPassword(!ocultPassord)
  }

  return (
    <FormProvider {...createUserForm}>
      <form
        onSubmit={handleSubmit(createUser)}
        className="w-full flex flex-col gap-14"
      >
        <div className="w-full flex flex-col gap-4">
          <InputForm.Field>
            <InputForm.Label htmlFor="name">Digite seu nome</InputForm.Label>
            <InputForm.Input type="text" name="name" placeholder="Nome" />
            <InputForm.ErrorMessage field="name" />
          </InputForm.Field>

          <InputForm.Field>
            <InputForm.Label htmlFor="email">Digite seu e-mail</InputForm.Label>
            <InputForm.Input type="email" name="email" placeholder="E-mail" />
            <InputForm.ErrorMessage field="email" />
          </InputForm.Field>

          <InputForm.Field>
            <InputForm.Label htmlFor="password">
              Digite sua senha
            </InputForm.Label>
            <div className="flex">
              <InputForm.Input
                type={ocultPassord ? 'text' : 'password'}
                name="password"
                placeholder="Senha"
                rounded="start"
              />

              <InputForm.Action onClick={handlePassword}>
                {!ocultPassord ? (
                  <Icon icon={BsEyeFill} />
                ) : (
                  <Icon icon={BsEyeSlashFill} />
                )}
              </InputForm.Action>
            </div>
            <InputForm.ErrorMessage field="password" />
          </InputForm.Field>

          <div className="w-full flex gap-4">
            <InputForm.Field className="w-full">
              <InputForm.Label htmlFor="city">
                Digite sua cidade
              </InputForm.Label>
              <InputForm.Input type="text" name="city" placeholder="Cidade" />
              <InputForm.ErrorMessage field="city" />
            </InputForm.Field>

            <InputForm.Field className="w-52">
              <InputForm.Label htmlFor="state">Digite o estado</InputForm.Label>
              <InputForm.Input type="text" name="state" placeholder="Estado" />
              <InputForm.ErrorMessage field="state" />
            </InputForm.Field>
          </div>
        </div>

        <Button.root type="submit" size="xl">
          <Button.text size="xl">Cadastrar</Button.text>
        </Button.root>
      </form>
    </FormProvider>
  )
}
