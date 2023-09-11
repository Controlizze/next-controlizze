import { Button } from 'components/Button'
import { Input } from 'components/Input'

export function Form() {
  //   const [ocultPassword, setOcultPassword] = useState(false)

  //   function handlePassword() {
  //     setOcultPassword(!ocultPassword)
  //   }

  return (
    <form className="w-full flex flex-col gap-5">
      <Input.field>
        <Input.label htmlFor="password">Digite sua nova senha</Input.label>
        <Input.container>
          <Input.camp id="password" type="text" placeholder="Senha" />
        </Input.container>
      </Input.field>

      <Input.field>
        <Input.label htmlFor="confirmPassword">
          Digite novamente sua nova senha
        </Input.label>
        <Input.container>
          <Input.camp
            id="confirmPassword"
            type="text"
            placeholder="Confirme a senha"
          />
        </Input.container>
      </Input.field>

      <Button className="mt-5">Avançar</Button>
    </form>
  )
}
