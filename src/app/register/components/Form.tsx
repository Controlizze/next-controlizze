import { useState } from 'react'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

export function Form() {
  const [ocultPassword, setOcultPassword] = useState(false)

  function handlePassword() {
    setOcultPassword(!ocultPassword)
  }

  return (
    <form className="w-full flex flex-col gap-5">
      <Input.field>
        <Input.label htmlFor="name">Digite seu nome</Input.label>
        <Input.container>
          <Input.camp id="name" type="text" placeholder="Nome" />
        </Input.container>
      </Input.field>

      <Input.field>
        <Input.label htmlFor="email">Digite seu e-mail</Input.label>
        <Input.container>
          <Input.camp id="email" type="email" placeholder="E-mail" />
        </Input.container>
      </Input.field>

      <Input.field>
        <Input.label htmlFor="password">Digite sua senha</Input.label>
        <Input.container>
          <Input.camp
            id="password"
            type={ocultPassword ? 'text' : 'password'}
            placeholder="Senha"
          />
          <Input.action
            ocultPassword={ocultPassword}
            onClick={handlePassword}
          />
        </Input.container>
      </Input.field>

      <Input.field>
        <Input.label htmlFor="confirmPassword">
          Digite novamente sua senha
        </Input.label>
        <Input.container>
          <Input.camp
            id="confirmPassword"
            type={ocultPassword ? 'text' : 'password'}
            placeholder="Confirme a senha"
          />
          <Input.action
            ocultPassword={ocultPassword}
            onClick={handlePassword}
          />
        </Input.container>
      </Input.field>

      <Button className="mt-5">Avançar</Button>
    </form>
  )
}
