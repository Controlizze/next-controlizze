'use client'

import Link from 'next/link'
import { BsArrowLeftShort } from 'react-icons/bs'

import Container from 'components/Container'
import { Form } from 'components/Form'
import { Icon } from 'components/Icon'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  return (
    <Container className="flex">
      <div className="w-full h-screen px-8 py-10 flex flex-col gap-12 bg-background-900">
        <Link href="/" className="flex items-center gap-1 text-xs text-white">
          <Icon icon={BsArrowLeftShort} size="md" fill="primary" />
          Voltar
        </Link>

        <div className="flex flex-col gap-1">
          <span className=" text-2xl font-bold text-white">Acesse</span>
          <span className=" text-md text-white">Com e-mail e senha</span>
        </div>

        <Form.login />
      </div>

      {/* <div className="w-1/3 h-full px-12 py-[72px] flex flex-col gap-12 bg-background-900">
        <a href="/" className="max-w-max">
          <BsChevronLeft className="w-7 h-7 fill-white" />
        </a>

        <div className="flex flex-col gap-1">
          <Text size="XL" weight="bold">
            Acesse
          </Text>
          <Text size="xl">Com e-mail e senha</Text>
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

        <Text size="XXL" weight="bold" color="primary" className="text-center">
          Bem-vindo de volta!
        </Text>

        <Text
          size="xxxl"
          weight="default"
          color="primary"
          className="max-w-[900px] text-center"
        >
          Como é bom vê-lo novamente, acesse sua conta agora mesmo para voltar a
          ter nosso serviço
        </Text>
      </div> */}
    </Container>
  )
}
