'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

import { Button } from 'components/Button'
import Container from 'components/Container'
import { Icon } from 'components/Icon'
import { Logo } from 'components/Logo'

export default function Home() {
  return (
    <Container className="flex flex-col justify-between">
      <header className="w-full h-20 px-6 sm:h-28 sm:px-12 md:h-32 md:px-18 flex justify-between items-center">
        <Logo size={140} />

        <div className="flex gap-4">
          <Link href="/login" className="hidden sm:block">
            <Button.root fill="empty">
              <Button.text color="white" transform="lower" size="xs">
                Login
              </Button.text>
            </Button.root>
          </Link>

          <Link href="/cadastro">
            <Button.root>
              <Button.text size="xs">Cadastrar-se</Button.text>
            </Button.root>
          </Link>
        </div>
      </header>

      <main className="w-full px-6 sm:px-12 md:px-18 flex justify-between items-center">
        <div className="max-w-2xl flex flex-col gap-6 sm:gap-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            <span className="font-normal">Trabalho de</span>
            <br />
            Conclusão de Curso
          </h1>

          <p className="text-sm sm:text-md text-zinc-400">
            Nossa missão é ajudar os jovens da sociedade à administrarem seu
            dinheiro desde o início da carreira profissional. A plataforma
            servirá como um auxílio simples e prático, para que seja possível
            acompanhar o crescimento financeiro tanto a médio quanto a longo
            prazo. Além disso, apresentamos várias opções de corretoras e bancos
            a fim de incentivar o usuário a investir de maneira correta e que
            melhor se encaixa em seu perfil. É hora de dar um upgrade nas
            finanças e conquistar seus sonhos!
          </p>

          <Link href="/login">
            <Button.root>
              <Button.text size="xs">Teste Gratuitamente</Button.text>
              <Icon size="xs" icon={BsArrowRight} />
            </Button.root>
          </Link>
        </div>

        <Image
          src="/graphic1.png"
          width={650}
          height={650}
          alt="graphic"
          className="hidden xl:block"
        />
      </main>

      <footer className="w-full h-16 px-6 py-3 sm:h-20 sm:px-8 md:h-24 md:px-18 lg:h-28 lg:px-24 flex flex-col justify-center items-center gap-1 bg-background-700">
        <span className="text-[8px] sm:text-xs lg:text-base text-center font-semibold text-primary-500">
          Realizado pelos alunos Caroline Souza, Richard Rodrigues e Yuri Onorio
        </span>

        <span className="text-[8px] sm:text-xs lg:text-base text-center text-primary-500">
          ETEC &quot;Cidade do Livro&quot; de Lençóis Paulista - SP
        </span>
      </footer>

      {/* <header className="w-full h-32 px-24 flex justify-between items-center">
        <Image src="/new_logo.png" width={215} height={215} alt="logo" />

        <div className="flex gap-4">
          <Link href="/login">
            <Button.root fill="empty">
              <Button.text color="white" transform="lower">
                Login
              </Button.text>
            </Button.root>
          </Link>

          <Link href="/cadastro">
            <Button.root>
              <Button.text>Cadastrar-se</Button.text>
            </Button.root>
          </Link>
        </div>
      </header>

      <main className="w-full px-24 flex justify-between items-center">
        <div className="max-w-2xl flex flex-col gap-8">
          <h1 className="text-6xl font-bold text-white">
            <span className="font-normal">Trabalho de</span>
            <br />
            Conclusão de Curso
          </h1>

          <p className="text-lg text-zinc-400">
            Nossa missão é ajudar os jovens da sociedade à administrarem seu
            dinheiro desde o início da carreira profissional. A plataforma
            servirá como um auxílio simples e prático, para que seja possível
            acompanhar o crescimento financeiro tanto a médio quanto a longo
            prazo. Além disso, apresentamos várias opções de corretoras e bancos
            a fim de incentivar o usuário a investir de maneira correta e que
            melhor se encaixa em seu perfil. É hora de dar um upgrade nas
            finanças e conquistar seus sonhos!
          </p>

          <Link href="/login">
            <Button.root>
              <Button.text>Teste Gratuitamente</Button.text>
              <BsArrowRight className="w-6 h-6 text-black-500" />
            </Button.root>
          </Link>
        </div>

        <Image
          src="/graphic1.png"
          width={650}
          height={650}
          alt="graphic"
          className="hidden xl:block"
        />
      </main>

      <footer className="w-full h-28 px-24 flex flex-col justify-center items-center gap-1 bg-background-700">
        <span className="text-base font-semibold text-primary-500">
          Realizado pelos alunos Caroline Souza, Richard Rodrigues e Yuri Onorio
        </span>

        <span className="text-base text-primary-500">
          ETEC &quot;Cidade do Livro&quot; de Lençóis Paulista - SP
        </span>
      </footer> */}
    </Container>
  )
}
