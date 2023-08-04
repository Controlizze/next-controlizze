'use client'

import Image from 'next/image'

import { Button } from 'components/Button'
import Container from 'components/Container'

export default function Home() {
  const handleClickLogin = () => {
    window.location.href = '/login'
  }

  const handleClickLRegister = () => {
    window.location.href = '/cadastro'
  }

  return (
    <Container className="flex flex-col justify-between">
      <header className="w-full h-32 px-24 flex justify-between items-center">
        <Image src="/new_logo.png" width={215} height={215} alt="logo" />

        <div className="flex gap-4">
          <button
            className="h-12 px-8 flex justify-center items-center gap-3 rounded hover:opacity-75 transition-all"
            onClick={handleClickLogin}
          >
            <span className="text-base font-bold text-white">Login</span>
          </button>

          <button
            className="h-12 px-8 flex justify-center items-center gap-3 border border-primary-500 rounded hover:opacity-75 transition-all"
            onClick={handleClickLRegister}
          >
            <span className="text-base font-bold text-primary-500 uppercase">
              Cadastre-se
            </span>
          </button>
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

          <Button.root>
            <Button.text>Teste Gratuitamente</Button.text>
          </Button.root>
        </div>

        <Image src="/graphic1.png" width={650} height={650} alt="graphic" />
      </main>

      <footer className="w-full h-28 px-24 flex flex-col justify-center items-center gap-1 bg-background-700">
        <span className="text-base font-semibold text-primary-500">
          Realizado pelos alunos Caroline Souza, Richard Rodrigues e Yuri Onorio
        </span>

        <span className="text-base text-primary-500">
          ETEC &quot;Cidade do Livro&quot; de Lençóis Paulista - SP
        </span>
      </footer>
    </Container>
  )
}
