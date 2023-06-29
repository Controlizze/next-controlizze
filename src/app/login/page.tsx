import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Buttons/Button'

export default function LoginPage() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        background:
          'linear-gradient(#00000060, #00000060), url(/fundo_geometrico.png)',
        backgroundColor: '#111111'
      }}
    >
      <div className="w-[432px] h-[553px] flex flex-col bg-zinc-900 rounded-3xl shadow-lg">
        <div className="w-full p-14 flex flex-1 flex-col justify-between items-center">
          <Image src="/logo.png" width={318} height={60} alt="Logo" />
          <form className="w-full flex flex-col items-center gap-4" action="">
            <span className="text-2xl font-semibold text-zinc-50">
              Fazer Login
            </span>

            {/*Input de Forms*/}
            <div className="w-full flex flex-col">
              <label className="text-xs font-normal text-zinc-50" htmlFor="">
                Email
              </label>
              <input
                className="w-full h-8 px-2 rounded-md outline-none"
                type="text"
              />
            </div>

            {/*Input de Forms*/}
            <div className="w-full flex flex-col">
              <label className="text-xs font-normal text-zinc-50" htmlFor="">
                Senha
              </label>
              <input
                className="w-full h-8 px-2 rounded-md outline-none"
                type="text"
              />
            </div>
          </form>
          <Button
            width="full"
            height={12}
            fontWeight="bold"
            upper="uppercase"
            textButton="Entrar"
          />
        </div>
        <div className="w-full h-20 px-14 py-2 flex items-center gap-2 bg-zinc-800 rounded-b-3xl rounded-bl-3xl">
          <span className="text-zinc-50">Ainda não tem uma conta?</span>
          <Link className="text-orange-500 font-semibold" href="/cadastro">
            Crie uma!
          </Link>
        </div>
      </div>
    </div>
  )
}
