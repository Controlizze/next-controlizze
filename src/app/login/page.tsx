'use client'

import Link from 'next/link'
import { BsArrowLeftShort } from 'react-icons/bs'

import { Banner } from 'components/Banner'
import Container from 'components/Container'
import { Form } from 'components/Form'
import { Icon } from 'components/Icon'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  return (
    <Container className="flex">
      <div className="w-full xl:w-2/5 h-screen px-8 py-10 flex flex-col gap-12 bg-background-900">
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

      <Banner login />
    </Container>
  )
}
