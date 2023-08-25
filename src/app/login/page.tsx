'use client'

import { useRouter } from 'next/navigation'
import { BsArrowLeftShort } from 'react-icons/bs'

import { Banner } from 'components/Banner'
import Container from 'components/Container'
import { Form } from 'components/Form'
import { Icon } from 'components/Icon'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  const router = useRouter()

  return (
    <Container className="flex">
      <div className="w-full xl:w-2/5 h-screen p-8 2xl:p-14 flex flex-col gap-12 bg-background-900">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 text-xs lg:text-base text-white hover:opacity-75 transition-all"
        >
          <Icon icon={BsArrowLeftShort} size="md" fill="primary" />
          Voltar
        </button>

        <div className="flex flex-col gap-1">
          <span className=" text-2xl md:text-3xl font-bold text-white">
            Acesse
          </span>
          <span className=" text-base md:text-xl text-white">
            Com e-mail e senha
          </span>
        </div>

        <Form.login />
      </div>

      <Banner login />
    </Container>
  )
}
