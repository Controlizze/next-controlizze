'use client'

import Link from 'next/link'

import { Form } from './components/Form'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  return (
    <div className="w-full h-screen p-7 flex flex-col gap-8 bg-background-700">
      <div className="w-fit mt-[52px] flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-white capitalize">Faça login</h1>
        <span className="text-base text-zinc-400 uppercase">
          Com e-mail e senha
        </span>
      </div>

      <Form />

      <div className="flex justify-center items-center gap-2">
        <span className="text-xs text-zinc-400">Ainda não tem sua conta?</span>
        <Link href="/register" className="text-xs text-primary-500">
          Cadastre-se
        </Link>
      </div>
    </div>
  )
}
