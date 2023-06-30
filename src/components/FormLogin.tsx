import { Button } from './Button'
import Input from './Input'

export default function FormLogin() {
  return (
    <>
      <div className="w-full">
        <form className="w-full flex flex-col items-center gap-4" action="">
          <span className="text-xl font-semibold text-zinc-50">
            Fazer Login
          </span>
          <Input sizeX="full" type="email">
            Email
          </Input>
          <Input sizeX="full" type="password">
            Senha
          </Input>
        </form>
      </div>
      <Button sizeX="full" sizeY="12" variant="default" upperText="uppercase">
        Entrar
      </Button>
    </>
  )
}
