'use client'

import Image from 'next/image'
import { BsChevronLeft, BsEyeFill } from 'react-icons/bs'

import Container from 'components/Container'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  const handleSubmit = () => {
    window.location.href = '/dashboard'
  }

  return (
    <Container className="flex">
      <div className="w-1/3 h-full px-12 py-[72px] flex flex-col gap-14 bg-black-900">
        <a href="/" className="max-w-max">
          <BsChevronLeft className="w-7 h-7 fill-white" />
        </a>
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-white">Acesse</span>
          <span className="text-xl text-white">Com e-mail e senha</span>
        </div>
        <form action="" className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            {/* Input */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="email" className=" text-xs text-black-100">
                Digite seu e-mail
              </label>
              <div className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-black-100 text-base">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Input */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="password" className=" text-xs text-black-100">
                Digite sua senha
              </label>
              <div className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-black-100 text-base">
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full outline-none"
                />
                <BsEyeFill className="w-6 h-6 fill-black-100" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4  rounded" />
              <span className="text-xs text-black-100">
                Lembrar minha senha
              </span>
            </div>
            <a
              href="/forget-password"
              className="text-xs text-orange-500 hover:text-orange-300 transition-all"
            >
              Esqueci minha senha
            </a>
          </div>
        </form>

        <div className="w-full flex justify-between gap-4">
          <a
            href="/cadastro"
            className="w-full px-4 py-4 flex justify-center items-center border border-primary-500 hover:border-primary-300 rounded-xl shadow-lg transition-all text-xl font-semibold text-primary-500 hover:text-primary-300"
          >
            Cadastrar
          </a>

          <button
            onClick={handleSubmit}
            className="w-full px-4 py-4 bg-primary-500 hover:bg-primary-300 rounded-xl shadow-lg transition-all text-xl font-semibold text-white"
          >
            Acessar
          </button>
        </div>
      </div>
      <div
        className="relative w-full h-full p-14 flex flex-col justify-center items-center gap-6"
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Image
          src="/logo_nova.png"
          width={180}
          height={180}
          alt="logo"
          className="absolute top-14 left-14"
        />
        <span className="text-6xl font-bold text-center text-primary-500">
          Bem-vindo de volta!
        </span>
        <span className="max-w-[900px] text-3xl font-light text-center text-primary-500">
          Como é bom vê-lo novamente, acesse sua conta agora mesmo para voltar a
          ter nosso serviço
        </span>
      </div>
    </Container>
  )
}
