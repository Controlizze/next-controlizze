'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LuArrowLeft, LuEye, LuEyeOff } from 'react-icons/lu'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function RegisterPage() {
  const [ocultPassword, setOcultPassword] = useState(false)
  const router = useRouter()

  function handlePassword() {
    setOcultPassword(!ocultPassword)
  }

  return (
    <aside className="w-full h-screen p-7 flex flex-col gap-8 bg-background-700">
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

      <div className="w-full flex flex-col gap-5">
        <fieldset className="w-full flex flex-col gap-0.5">
          <label htmlFor="name" className="text-xs font-medium text-zinc-400">
            Digite seu nome
          </label>
          <div className="relative w-full flex">
            <input
              id="name"
              type="text"
              className="w-full h-full px-3 py-2 rounded outline-none"
              placeholder="Nome"
            />
          </div>
        </fieldset>

        <fieldset className="w-full flex flex-col gap-0.5">
          <label htmlFor="email" className="text-xs font-medium text-zinc-400">
            Digite seu e-mail
          </label>
          <div className="relative w-full flex">
            <input
              id="email"
              type="text"
              className="w-full h-full px-3 py-2 rounded outline-none"
              placeholder="E-mail"
            />
          </div>
        </fieldset>

        <fieldset className="w-full flex flex-col gap-0.5">
          <label
            htmlFor="password"
            className="text-xs font-medium text-zinc-400"
          >
            Digite sua senha
          </label>
          <div className="relative w-full flex">
            <input
              id="password"
              type={ocultPassword ? 'text' : 'password'}
              className="w-full h-full px-3 py-2 rounded outline-none"
              placeholder="Senha"
            />
            <button onClick={handlePassword}>
              {!ocultPassword ? (
                <LuEye className="absolute top-1/2 translate-y-[-50%] right-3 w-5 h-5 text-zinc-400" />
              ) : (
                <LuEyeOff className="absolute top-1/2 translate-y-[-50%] right-3 w-5 h-5 text-zinc-400" />
              )}
            </button>
          </div>
        </fieldset>

        <fieldset className="w-full flex flex-col gap-0.5">
          <label
            htmlFor="confirm-password"
            className="text-xs font-medium text-zinc-400"
          >
            Digite novamente sua senha
          </label>
          <div className="relative w-full flex">
            <input
              id="confirm-password"
              type={ocultPassword ? 'text' : 'password'}
              className="w-full h-full px-3 py-2 rounded outline-none"
              placeholder="Confirmar Senha"
            />
            <button onClick={handlePassword}>
              {!ocultPassword ? (
                <LuEye className="absolute top-1/2 translate-y-[-50%] right-3 w-5 h-5 text-zinc-400" />
              ) : (
                <LuEyeOff className="absolute top-1/2 translate-y-[-50%] right-3 w-5 h-5 text-zinc-400" />
              )}
            </button>
          </div>
        </fieldset>
      </div>

      <button className="h-12 px-3 flex justify-center items-center bg-primary-500 hover:opacity-75 rounded shadow-lg shadow-button-sw transition-all text-sm font-semibold uppercase">
        Avançar
      </button>
    </aside>
  )
}
