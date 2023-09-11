import Link from 'next/link'
import { useState } from 'react'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

export function Form() {
  const [ocultPassword, setOcultPassword] = useState(false)
  const [checked, setChecked] = useState(true)

  function handlePassword() {
    setOcultPassword(!ocultPassword)
  }

  function isChecked() {
    setChecked(!checked)
  }

  return (
    <form className="w-full flex flex-col gap-5">
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

      <div className="flex justify-between items-center">
        <fieldset className="w-fit flex justify-center items-center gap-1">
          <input
            id="checkbox-password"
            type="checkbox"
            checked={!checked}
            onChange={isChecked}
            className="w-4 h-4 rounded accent-primary-500"
          />
          <label htmlFor="checkbox-password" className="text-xs text-white">
            Lembra minha senha
          </label>
        </fieldset>

        <Link
          href="/forgot-password"
          className="text-xs text-primary-500 hover:opacity-75 transition-all"
        >
          Esqueci a senha!
        </Link>
      </div>

      <Button className="mt-5">Acessar</Button>
    </form>
  )
}
