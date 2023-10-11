'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LuArrowLeft } from 'react-icons/lu'

import { Banner } from 'components/Banner/Banner'
import { Button } from 'components/Button'
import { Form } from 'components/Form/Form'
import { Input } from 'components/Form/Input'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z
  .object({
    name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    email: z
      .string()
      .email('Digite um e-mail válido')
      .transform((value) => {
        return value.toLowerCase()
      }),
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
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background-700">
      <div className="w-full h-full lg:w-[40%] 2xl:w-[30%] p-7 xl:py-8 flex flex-col gap-8 lg:gap-16 bg-background-700">
        <button
          className="w-fit flex items-center gap-2"
          onClick={() => router.back()}
        >
          <LuArrowLeft className="text-lg text-primary-500" />
          <span className="text-sm text-white">Voltar</span>
        </button>

        <div className="w-fit flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-white capitalize">
            Cadastre-se
          </h1>
          <span className="text-base text-zinc-400 uppercase">
            Informe seus dados
          </span>
        </div>

        <Form onSubmit={handleSubmit((data) => console.log(data))} col>
          <Input
            {...register('name')}
            name="name"
            type="text"
            placeholder="Digite seu nome"
            helperText={errors.name?.message}
            onChange={(e) => setName(e.target.value)}
            label="Nome"
          />

          <Input
            {...register('email')}
            name="email"
            type="email"
            placeholder="Digite seu email"
            helperText={errors.email?.message}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />

          <Input
            {...register('password')}
            name="password"
            placeholder="Digite sua senha"
            helperText={errors.password?.message}
            onChange={(e) => setPassword(e.target.value)}
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
    </div>
  )
}
