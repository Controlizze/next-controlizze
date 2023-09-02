'use client'

import Link from 'next/link'
import { useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  const [ocultPassword, setOcultPassword] = useState(false)

  function handlePassword() {
    setOcultPassword(!ocultPassword)
  }

  return (
    <aside className="w-full h-screen p-7 flex flex-col gap-8 bg-background-700">
      <div className="w-fit mt-[52px] flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-white capitalize">Faça login</h1>
        <span className="text-base text-zinc-400 uppercase">
          Com e-mail e senha
        </span>
      </div>

      <div className="w-full flex flex-col gap-5">
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
            <button onClick={handlePassword} className="hidden">
              <LuEye className="absolute top-1/2 translate-y-[-50%] right-3 w-5 h-5 text-zinc-400" />
            </button>
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

        <div className="flex justify-between items-center">
          <fieldset className="w-fit flex justify-center items-center gap-1">
            <input
              id="checkbox-password"
              type="checkbox"
              className="w-4 h-4 rounded accent-primary-500"
            />
            <label
              htmlFor="checkbox-password"
              className="text-xs text-zinc-400"
            >
              Lembra minha senha
            </label>
          </fieldset>

          <Link
            href="/forgot-password"
            className="text-xs text-primary-500 hover:opacity-75 transition-all"
          >
            Esqueci a senha!
          </Link>
        </div>
      </div>

      <button className="h-12 px-3 flex justify-center items-center bg-primary-500 hover:opacity-75 rounded shadow-lg shadow-button-sw transition-all text-sm font-semibold uppercase">
        Acessar
      </button>

      <div className="flex justify-center items-center gap-2">
        <span className="text-xs text-white">Ainda não tem sua conta?</span>
        <Link href="/register" className="text-xs text-primary-500">
          Cadastre-se
        </Link>
      </div>
    </aside>
  )
}
