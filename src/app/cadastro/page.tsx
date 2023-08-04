'use client'

import Image from 'next/image'
import { BsChevronLeft, BsEyeFill } from 'react-icons/bs'

import Container from 'components/Container'

export const metadata = {
  title: 'Cadastro - Controlizze'
}

export default function Cadastro() {
  const handleSubmit = () => {
    window.location.href = '/login'
  }

  return (
    <Container className="flex">
      <div className="w-1/3 h-full px-12 py-[72px] flex flex-col gap-14 bg-background-900">
        <a href="/" className="max-w-max">
          <BsChevronLeft className="w-7 h-7 fill-white" />
        </a>
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-white">Cadastre-se</span>
          <span className="text-xl text-white">Informe seus dados</span>
        </div>
        <form action="" className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            {/* Input */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="name" className=" text-xs text-zinc-400">
                Digite seu nome
              </label>
              <div className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-zinc-400 text-base">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Input */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="date" className=" text-xs text-zinc-400">
                Digite sua data de nascimento
              </label>
              <div className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-zinc-400 text-base">
                <input
                  type="date"
                  placeholder="Data de nascimento"
                  className="w-full outline-none"
                />
                {/* <BsFillCalendarFill className="w-6 h-6 fill-zinc-400" /> */}
              </div>
            </div>

            {/* Input */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="email" className=" text-xs text-zinc-400">
                Digite seu e-mail
              </label>
              <div className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-zinc-400 text-base">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Input */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="password" className=" text-xs text-zinc-400">
                Digite sua senha
              </label>
              <div className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-zinc-400 text-base">
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full outline-none"
                />
                <BsEyeFill className="w-6 h-6 fill-zinc-400" />
              </div>
            </div>

            <div className="flex gap-4">
              {/* Input */}
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="city" className=" text-xs text-zinc-400">
                  Digite sua cidade
                </label>
                <div className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-zinc-400 text-base">
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Input */}
              <div className="w-40 flex flex-col gap-1">
                <label htmlFor="state" className=" text-xs text-zinc-400">
                  Digite seu estado
                </label>
                <div className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-zinc-400 text-base">
                  <input
                    type="text"
                    placeholder="Estado"
                    className="w-full outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-4 flex justify-center items-center gap-3 bg-primary-500 rounded hover:opacity-75 transition-all"
        >
          <span className="text-base font-bold text-black-500 uppercase">
            Cadastrar
          </span>
        </button>
      </div>
      <div
        className="relative w-full h-full p-14 flex flex-col justify-center items-center gap-6"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('/background_office.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Image
          src="/new_logo.png"
          width={180}
          height={180}
          alt="logo"
          className="absolute top-14 left-14"
        />
        <span className="text-6xl font-bold text-center text-primary-500">
          Bem-vindo companheiro!
        </span>
        <span className="max-w-[900px] text-3xl font-light text-center text-primary-500">
          Cadastre-se já em nossa plataforma e obtenha o controle financeiro que
          você precisa
        </span>
      </div>
    </Container>
  )
}
