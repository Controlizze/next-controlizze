'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { InputForm } from 'components/Input'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createUserSchema = z.object({
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
    })
})

type CreateUserData = z.infer<typeof createUserSchema>

export function FormLogin() {
  const [ocultPassord, setOcultPassword] = useState(false)

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema)
  })

  function createUser(data: any) {
    console.log({ ...data })
  }

  const { handleSubmit } = createUserForm

  function isSubmit() {
    window.location.href = '/dashboard'
  }

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
        </div>

        <Button.root type="submit" onClick={isSubmit} size="xl">
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
    </FormProvider>
  )
}
