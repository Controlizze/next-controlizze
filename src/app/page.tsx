import Link from 'next/link'

import { Button } from 'components/Button'
import Logo from 'components/Logo'

export default function HomePage() {
  return (
    <div className="realtive w-full min-h-screen flex flex-col bg-900">
      <header className="absolute top-0 left-0 w-full p-7 md:p-9 xl:p-12 flex justify-between items-center">
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

      <main
        className="w-full h-screen p-7 md:p-9 xl:p-12 flex flex-col justify-center gap-6 md:gap-8"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('/bg.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <h1 className="text-4xl md:text-5xl md:max-w-4xl 2xl:text-7xl font-semibold text-white">
          O futuro das suas finanças está no seu{' '}
          <span className="bg-gradient-to-b from-primary-500 to-primary-900 bg-clip-text text-transparent">
            controle.
          </span>
        </h1>

        <p className="md:max-w-3xl text-sm md:text-base 2xl:text-lg text-zinc-200">
          Auxiliamos jovens profissionais na gestão financeira desde o início da
          carreira, oferecendo uma plataforma prática para acompanhamento a
          longo prazo. Fornecemos opções de investimento personalizadas. Vamos
          ajudá-los a alcançar seus objetivos financeiros.
        </p>

        <Link href="/login" className="w-full md:w-fit">
          <Button className="w-full md:w-fit">Acesse já sua conta</Button>
        </Link>
      </main>
    </div>
  )
}
