'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { BsArrowDownCircle, BsArrowUpCircle, BsWallet } from 'react-icons/bs'

import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { InputForm } from 'components/Input'

import data from '../../../../../data.json'
import { Card } from '../Card'

type CreateRegisterData = { number: string }

export function Content() {
  const createUserForm = useForm<CreateRegisterData>()

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="w-full flex justify-between gap-10">
        <Card>
          <div className="w-full flex justify-between items-center">
            <span className="text-3xl font-medium text-white">Despesas</span>
            <Icon icon={BsArrowDownCircle} size="xl" fill="red" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-5xl font-bold text-white">R$0.00</span>
          </div>
        </Card>

        <Card>
          <div className="w-full flex justify-between items-center">
            <span className="text-3xl font-medium text-white">Receitas</span>
            <Icon icon={BsArrowUpCircle} size="xl" fill="green" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-5xl font-bold text-white">R$0.00</span>
          </div>
        </Card>

        <Card>
          <div className="w-full flex justify-between items-center">
            <span className="text-3xl font-medium text-white">Saldo</span>
            <Icon icon={BsWallet} size="xl" fill="orange" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-5xl font-bold text-white">R$0.00</span>
          </div>
        </Card>
      </div>

      <FormProvider {...createUserForm}>
        <Card flex="row">
          <div className="w-full flex gap-4">
            <InputForm.Field className="w-full">
              <InputForm.Label htmlFor="date">Informe a data</InputForm.Label>
              <InputForm.Input
                type="date"
                name="date"
                placeholder="Data"
                scale="sm"
              />
            </InputForm.Field>

            <InputForm.Field className="w-full">
              <InputForm.Label htmlFor="description">
                Informe a descrição
              </InputForm.Label>
              <InputForm.Input
                type="type"
                name="description"
                placeholder="Descrição"
                scale="sm"
              />
            </InputForm.Field>

            <InputForm.Field className="w-full">
              <InputForm.Label htmlFor="category">
                Informe a categoria
              </InputForm.Label>
              <InputForm.Input
                type="text"
                name="category"
                placeholder="Categoria"
                scale="sm"
              />
            </InputForm.Field>

            <InputForm.Field className="w-full">
              <InputForm.Label htmlFor="value">Informe o valor</InputForm.Label>
              <InputForm.Input
                type="text"
                name="value"
                placeholder="Valor"
                scale="sm"
              />
            </InputForm.Field>
          </div>

          <div className="flex justify-center items-center gap-2 text-white">
            <input
              id="expense"
              type="radio"
              name="type"
              className="w-5 h-5 accent-primary-500"
              checked
            />
            <label htmlFor="expense">Despesa</label>
          </div>

          <div className="flex justify-center items-center gap-2 text-white">
            <input
              id="revenue"
              type="radio"
              name="type"
              className="w-5 h-5 accent-primary-500"
            />
            <label htmlFor="revenue">Receita</label>
          </div>

          <Button.root>
            <Button.text>Adicionar</Button.text>
          </Button.root>
        </Card>
      </FormProvider>

      <Card className="flex-auto">
        <span>Registros</span>

        {data.map((d) => (
          <div key={d.id}>
            <p className="text-white">{d.data}</p>
            <p className="text-white">{d.description}</p>
            <p className="text-white">{d.category}</p>
            <p
              className={
                d.value == 0
                  ? 'text-white'
                  : d.value > 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }
            >
              {d.value}
            </p>
          </div>
        ))}
      </Card>
    </div>
  )
}
