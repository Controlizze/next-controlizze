'use client'

import Image from 'next/image'
import { BsChevronLeft } from 'react-icons/bs'

import Container from 'components/Container'
import { Form } from 'components/Form'

export const metadata = {
  title: 'Cadastro - Controlizze'
}

export default function Cadastro() {
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

        <Form.register />
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
