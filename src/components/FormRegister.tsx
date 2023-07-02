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
          <div className="w-full flex justify-between gap-2">
            <Input sizeX="full" type="text">
              Cidade
            </Input>
            <Input sizeX="28" type="text">
              Estado
            </Input>
          </div>
        </form>
      </div>
      <Button.Root className="w-full h-12">
        <Button.Content text="Cadastrar" upper="uppercase" />
      </Button.Root>
    </>
  )
}
