import { Text } from 'components/Text'

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
      className="relative w-full h-full p-10 2xl:p-14 hidden xl:flex flex-col justify-center items-center gap-6"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('/background_office.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <img
        src="/new_logo.png"
        alt="logo"
        className="absolute top-10 left-10 2xl:top-14 2xl:left-14 w-[180px]"
      />

      <Text
        weight="bold"
        color="primary"
        className="text-4xl 2xl:text-6xl text-center"
      >
        {login ? 'Bem-vindo de volta!' : 'Bem-vindo, companehiro!'}
      </Text>

      <Text
        weight="default"
        color="primary"
        className="max-w-[900px] text-2xl 2xl:text-3xl text-center"
      >
        {login ? description : description2}
      </Text>
    </div>
  )
}
