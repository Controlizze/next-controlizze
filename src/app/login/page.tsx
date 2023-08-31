'use client'

import { LuArrowLeft, LuEye } from 'react-icons/lu'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  return (
    <aside className="w-full h-screen p-7 flex flex-col gap-8 bg-background-700">
      <button className="w-fit flex items-center gap-2">
        <LuArrowLeft className="text-lg text-primary-500" />
        <span className="text-sm text-white">Voltar</span>
      </button>

      <div className="w-fit flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-white capitalize">Faça login</h1>
        <span className="text-base text-zinc-400 uppercase">
          Com e-mail e senha
        </span>
      </div>

      <div className="w-full flex flex-col gap-5">
        <fieldset className="w-full flex flex-col gap-0.5">
          <label htmlFor="email" className="text-xs font-medium text-zinc-400">
            Digite seu e-mail
          </label>
          <div className="relative w-full flex">
            <input
              type="text"
              className="w-full h-full px-3 py-2 rounded outline-none"
            />
            <button>
              <LuEye className="absolute top-1/2 translate-y-[-50%] right-3 w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </fieldset>

        <div></div>
      </div>

      <div></div>

      <div></div>
    </aside>

    // <Container className="flex">
    //   <div className="w-full xl:w-2/5 h-screen p-8 2xl:p-14 flex flex-col gap-12 bg-background-900">
    //     <button
    //       onClick={() => router.back()}
    //       className="flex items-center gap-1 text-xs lg:text-base text-white hover:opacity-75 transition-all"
    //     >
    //       <Icon icon={BsArrowLeftShort} size="md" fill="primary" />
    //       Voltar
    //     </button>

    //     <div className="flex flex-col gap-1">
    //       <span className=" text-2xl md:text-3xl font-bold text-white">
    //         Acesse
    //       </span>
    //       <span className=" text-base md:text-xl text-white">
    //         Com e-mail e senha
    //       </span>
    //     </div>

    //     <Form.login />
    //   </div>

    //   <Banner login />
    // </Container>
  )
}
