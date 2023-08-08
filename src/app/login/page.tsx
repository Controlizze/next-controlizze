'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BsChevronLeft, BsEyeFill } from 'react-icons/bs'

import { Button } from 'components/Button'
import Container from 'components/Container'
import { Form } from 'components/Form'
import { Input } from 'components/Input'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  return (
    <Container className="flex">
      <div className="w-1/3 h-full px-12 py-[72px] flex flex-col gap-14 bg-background-900">
        <a href="/" className="max-w-max">
          <BsChevronLeft className="w-7 h-7 fill-white" />
        </a>
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-white">Acesse</span>
          <span className="text-xl text-white">Com e-mail e senha</span>
        </div>
        <Form login>
          <div className="w-full flex flex-col gap-4">
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
                  id="password"
                  type="password"
                  placeholder="Senha"
                  className="w-full outline-none"
                />
                <BsEyeFill className="w-6 h-6 fill-zinc-400" />
              </div>
            </div>

            <Input.root>
              <Input.label>Digite sua senha</Input.label>
              <Input.area type="password" placeholder="Senha">
                <BsEyeFill className="w-6 h-6 fill-zinc-400" />
              </Input.area>
            </Input.root>
          </div>
        </Form>

        <div className="w-full flex gap-4">
          <Link href="/cadastro">
            <Button.root fill="outline" size="xl">
              <Button.text color="primary">Cadastrar</Button.text>
            </Button.root>
          </Link>

          <Button.root size="xl">
            <Button.text>Acessar</Button.text>
          </Button.root>
        </div>
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
