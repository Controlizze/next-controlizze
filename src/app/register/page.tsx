'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { LuArrowLeft } from 'react-icons/lu'

import Banner from 'components/Banner'
import Button from 'components/Button'
import Container from 'components/Container'
import Form from 'components/Form'
import { Input } from 'components/Inputs/Input'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from 'hooks/useAuth'
import { RegisterType } from 'types/User'
import { z } from 'zod'

const schema = z
  .object({
    name: z
      .string()
      .nonempty('O nome é obrigatório')
      .min(3, 'O nome deve ter no mínimo 3 caracteres')
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
      .nonempty('O e-mail é obrigatório')
      .email('Digite um e-mail válido')
      .toLowerCase(),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não se conhecidem',
    path: ['confirmPassword']
  })

type DataProps = z.infer<typeof schema>

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })
  const { registerUser } = useAuth()

  const router = useRouter()

  async function handleRegister(data: RegisterType) {
    await registerUser(data)
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
          <h1 className="text-4xl font-bold text-white">Cadastre-se</h1>
          <span className="text-base text-zinc-400 uppercase">
            Informe seus dados
          </span>
        </div>

        <Form onSubmit={handleSubmit(handleRegister)}>
          <Input
            {...register('name')}
            name="name"
            type="text"
            placeholder="Digite seu nome"
            helperText={errors.name?.message}
            label="Nome"
          />

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

          <Input
            {...register('confirmPassword')}
            name="confirmPassword"
            placeholder="Digite novamente sua senha"
            helperText={errors.confirmPassword?.message}
            label="Confirmar senha"
            action
          />

          <Button type="submit" className="mt-5 lg:mt-10">
            Avançar
          </Button>
        </Form>
      </div>

      <Banner />
    </Container>
  )
}
