import Link from 'next/link'

import { Button } from 'components/Button'
import Logo from 'components/Logo/Logo'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-900">
      <header className="w-full p-7 md:p-9 xl:p-12 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <Link href="/login">
            <Button fill="empty">Login</Button>
          </Link>
          <Link href="/register">
            <Button fill="outline">Cadastre-se</Button>
          </Link>
        </div>
      </header>

      <main className="w-full p-7 md:p-9 xl:p-12 flex md:flex-col xl:flex-row flex-1 justify-between items-center gap-9">
        <div className="max-w-full xl:max-w-2xl flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-white">
            <span className="font-normal">Trabalho de</span>
            <br />
            Conclusão de Curso
          </h1>

          <p className="text-sm md:text-base 2xl:text-lg text-zinc-400">
            Nossa missão é ajudar os jovens da sociedade à administrarem seu
            dinheiro desde o início da carreira profissional. A plataforma
            servirá como um auxílio simples e prático, para que seja possível
            acompanhar o crescimento financeiro tanto a médio quanto a longo
            prazo. Além disso, apresentamos várias opções de corretoras e bancos
            a fim de incentivar o usuário a investir de maneira correta e que
            melhor se encaixa em seu perfil. É hora de dar um upgrade nas
            finanças e conquistar seus sonhos!
          </p>

          <Link href="/login" className="w-full md:w-fit">
            <Button className="md:w-fit">Tenha acesso já!</Button>
          </Link>
        </div>

        <img
          src="/graphic1.png"
          className="hidden md:block w-2/4 xl:w-[30%]"
          alt="illustration"
        />
      </main>

      <footer className="w-full px-7 py-3 md:py-6 xl:px-12 2xl:py-7 flex flex-col justify-center items-center gap-1 bg-background-700">
        <span className="text-[8px] md:text-xs 2xl:text-sm font-medium text-primary-500 text-center">
          Realizado pelos alunos Caroline Souza, Richard Rodrigues e Yuri Onorio
        </span>
        <span className="text-[8px] md:text-xs 2xl:text-sm text-primary-500 text-center">
          ETEC &quot;Cidade do Livro&quot; de Lençóis Paulista - SP
        </span>
      </footer>
    </div>
  )
}
