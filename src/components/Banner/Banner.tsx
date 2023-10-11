import Logo from 'components/Logo/Logo'

const description =
  'Como é bom vê-lo novamente, acesse sua conta agora mesmo para voltar a ter nosso serviço'

const description2 =
  'Cadastre-se já em nossa plataforma e obtenha o controle financeiro que você precisa'

export type BannerProps = {
  login?: boolean
}

export function Banner({ login }: BannerProps) {
  return (
    <div
      className="relative w-full lg:h-screen p-9 hidden md:flex flex-col flex-1 justify-center items-center gap-5"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('/background_office.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Logo banner />

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-bold text-white">
          {login ? 'Bem-vindo de volta!' : 'Bem-vindo, companheiro!'}
        </h1>
        <div className="w-full h-2 bg-gradient-to-r from-primary-500 to-background-700 rounded-full"></div>
      </div>

      <h2 className="max-w-[700px] 2xl:max-w-[900px] text-lg xl:text-xl 2xl:text-3xl font-medium text-white text-center">
        {login ? description : description2}
      </h2>
    </div>
  )
}
