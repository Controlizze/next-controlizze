'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { LuArrowLeft } from 'react-icons/lu'

import Banner from 'components/Banner'
import Button from 'components/Button'
import Container from 'components/Container'
import Form from 'components/Form'
import { Input } from 'components/Inputs/Input'

import { zodResolver } from '@hookform/resolvers/zod'
import { AuthContext } from 'contexts/AuthContext'
import { LoginType } from 'types/User'
import { z } from 'zod'

const schema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Digite um e-mail válido')
    .toLowerCase(),
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
  const { loginUser } = useContext(AuthContext)

  const router = useRouter()

  async function handleLogin(data: LoginType) {
    await loginUser(data)
  }

  return (
    <Container isSidebarOpen={false} setIsSidebarOpen={() => null}>
      <div className="w-full h-screen lg:w-[40%] 2xl:w-[30%] p-7 xl:py-8 flex flex-col gap-8 lg:gap-16 bg-800">
        <button
          className="w-fit flex items-center gap-2"
          onClick={() => router.back()}
        >
          <LuArrowLeft className="text-lg text-primary-500" />
          <span className="text-sm text-white">Voltar</span>
        </button>

        <div className="w-fit flex flex-col gap-2">
          <h2 className="text-4xl font-bold text-white">Faça login</h2>
          <span className="text-base text-zinc-400 uppercase">
            Com e-mail e senha
          </span>
        </div>

        <Form onSubmit={handleSubmit(handleLogin)}>
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
              href="/auth/forgot-password"
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
            href="/auth/register"
            className="text-xs 2xl:text-sm text-primary-500"
          >
            Cadastre-se
          </Link>
        </div>
      </div>

      <Banner login />
    </Container>
  )
}
