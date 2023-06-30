import { Button } from './Button'
import Input from './Input'

export default function FormRegister() {
  return (
    <>
      <div className="w-full">
        <form className="w-full flex flex-col items-center gap-4" action="">
          <span className="text-xl font-semibold text-zinc-50">
            Fazer Cadastro
          </span>
          <Input sizeX="full" type="text">
            Nome
          </Input>
          <Input sizeX="full" type="text">
            Data de Nascimento
          </Input>
          <Input sizeX="full" type="email">
            Email
          </Input>
          <Input sizeX="full" type="password">
            Senha
          </Input>
          <div className="flex gap-4">
            <Input sizeX="full" type="text">
              Cidade
            </Input>
            <Input sizeX="28" type="text">
              Estado
            </Input>
          </div>
        </form>
      </div>
      <Button sizeX="full" sizeY="12" variant="default" upperText="uppercase">
        Cadastrar
      </Button>
    </>
  )
}
