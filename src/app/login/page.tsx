'use client'

import Image from 'next/image'
import { BsChevronLeft } from 'react-icons/bs'

import Container from 'components/Container'
import { Form } from 'components/Form'

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

        <Form.login />
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
