'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { Banner } from 'components/Banner'
import { Button } from 'components/Button'
import { Form } from 'components/Form/Form'
import { Input } from 'components/Form/Input'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z
    .string()
    .email('Digite um e-mail válido')
    .transform((value) => {
      return value.toLowerCase()
    }),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
})

type DataProps = z.infer<typeof schema>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })
  // const { loginUser } = useContext(AuthContext)

  // async function handleLogin(data: LoginType) {
  //   await loginUser(data)
  // }

  return (
    <>
      <div className="w-full h-screen lg:w-[40%] 2xl:w-[30%] p-7 xl:py-8 flex flex-col gap-8 lg:gap-16 bg-800">
        <div className="w-fit mt-[52px] lg:mt-[84px] flex flex-col gap-2">
          <h2 className="text-4xl font-bold text-white capitalize">
            Faça login
          </h2>
          <span className="text-base text-zinc-400 uppercase">
            Com e-mail e senha
          </span>
        </div>

        <Form onSubmit={handleSubmit((data) => console.log(data))}>
          <Input
            {...register('email')}
            name="email"
            type="email"
            placeholder="Digite seu email"
            helperText={errors.email?.message}
            label="Email"
          />

          <Input
            {...register('password')}
            name="password"
            placeholder="Digite sua senha"
            helperText={errors.password?.message}
            label="Senha"
            action
          />

          <div className="flex justify-end items-center">
            <Link
              href="/forgot-password"
              className="text-xs 2xl:text-sm text-primary-500 hover:opacity-75 transition-all"
            >
              Esqueci minha senha
            </Link>
          </div>

          <Button type="submit" className="mt-5 lg:mt-10">
            Acessar
          </Button>
        </Form>

        <div className="flex justify-center items-center gap-2">
          <span className="text-xs 2xl:text-sm text-zinc-400">
            Ainda não tem sua conta?
          </span>
          <Link
            href="/register"
            className="text-xs 2xl:text-sm text-primary-500"
          >
            Cadastre-se
          </Link>
        </div>
      </div>

      <Banner login />
    </>
  )
}
