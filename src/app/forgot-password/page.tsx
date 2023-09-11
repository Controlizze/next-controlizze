'use client'

import { useRouter } from 'next/navigation'
import { LuArrowLeft } from 'react-icons/lu'

import { Form } from './components/Form'

export default function ForgotPassord() {
  const router = useRouter()

  return (
    <div className="w-full h-screen p-7 flex flex-col gap-8 bg-background-700">
      <button
        className="w-fit flex items-center gap-2"
        onClick={() => router.back()}
      >
        <LuArrowLeft className="text-lg text-primary-500" />
        <span className="text-sm text-white">Voltar</span>
      </button>

      <div className="w-fit flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-white capitalize">Esqueceu?</h1>
        <span className="text-base text-zinc-400 uppercase">
          Recupere a senha
        </span>
      </div>

      <Form />
    </div>
  )
}
