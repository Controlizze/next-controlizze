'use client'

import { useCallback, useState } from 'react'
import {
  LuArrowDownCircle,
  LuArrowUpCircle,
  LuMenu,
  LuWallet
} from 'react-icons/lu'

import { Button } from 'components/Button'
import CardValue from 'components/CardValue/CardValue'
import { Checkbox } from 'components/Form/Checkbox'
import { Form } from 'components/Form/Form'
import { Input } from 'components/Form/Input'
import Sidebar from 'components/Sidebar/Sidebar'
import TableMovements from 'components/Table/Table'

export default function MovementsPage() {
  const [openSidebar, setOpenSidebar] = useState(false)

  const closeSidebar = useCallback(
    () => setOpenSidebar(!openSidebar),
    [openSidebar]
  )

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background-900 overflow-x-hidden">
      {openSidebar && <Sidebar close={closeSidebar} />}
      <main className="lg:py-8 flex flex-1 flex-col lg:gap-4 2xl:gap-16 bg-background-900">
        <header className="fixed z-50 lg:relative top-0 left-0 w-full px-7 py-5 lg:px-8 lg:py-0 flex items-center gap-2 bg-background-700 lg:bg-transparent shadow-xl lg:shadow-none shadow-black/15">
          <button
            className="w-11 h-11 flex lg:hidden justify-center items-center bg-background-500 rounded-full"
            onClick={() => {
              setOpenSidebar(!openSidebar)
            }}
          >
            <LuMenu className="text-white text-2xl" />
          </button>

          <div className="w-fit flex flex-col justify-center gap-0">
            <h3 className="text-xs lg:text-sm 2xl:text-lg text-zinc-400 uppercase">
              Dashboard
            </h3>
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-white uppercase">
              Movimentações
            </h1>
          </div>
        </header>

        <div className="mt-[84px] lg:mt-0 p-8 lg:px-9 lg:py-0 flex flex-1 flex-col justify-between gap-8 lg:gap-4">
          <div className="flex flex-col sm:flex-row gap-4 2xl:gap-8">
            <CardValue
              title="Despesas"
              gradient="from-red-600"
              icon={LuArrowDownCircle}
              iconColor="text-red-600"
              value={1000}
            />

            <CardValue
              title="Receitas"
              gradient="from-green-600"
              icon={LuArrowUpCircle}
              iconColor="text-green-600"
              value={1000}
            />

            <CardValue
              title="Saldo"
              gradient="from-orange-600"
              icon={LuWallet}
              iconColor="text-orange-600"
              value={1000}
            />
          </div>

          <div className="px-8 py-5 flex flex-col gap-10 bg-background-700 rounded shadow-xl shadow-black/25">
            <div className="flex items-center gap-4 lg:gap-7">
              <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
                Incluir registro
              </h3>
              <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-background-700 rounded-full" />
            </div>

            <Form direction="row" className="items-center">
              <div className="w-full grid grid-rows-4 xl:grid-rows-none xl:grid-cols-12 grid-flow-col xl:grid-flow-row gap-4">
                <Input
                  name="data"
                  type="text"
                  placeholder="Digite a data"
                  label="Data"
                  scale="sm"
                  className="xl:col-span-2"
                />

                <Input
                  name="data"
                  type="text"
                  placeholder="Digite a descrição"
                  label="Descrição"
                  scale="sm"
                  className="xl:col-span-6"
                />

                <Input
                  name="category"
                  type="text"
                  placeholder="Digite a categoria"
                  label="Categoria"
                  scale="sm"
                  className="xl:col-span-2"
                />

                <Input
                  name="value"
                  type="text"
                  placeholder="Digite o valor"
                  label="Valor"
                  scale="sm"
                  className="xl:col-span-2"
                />
              </div>

              <div className="w-full 2xl:w-fit flex justify-around xl:justify-center items-center xl:gap-16 2xl:gap-4">
                <Checkbox name="type" type="radio" label="Despesa" />
                <Checkbox name="type" type="radio" label="Receita" />
              </div>

              <Button className="w-full 2xl:w-fit">Adicionar</Button>
            </Form>
          </div>

          <div className="w-full px-8 py-5 flex flex-col gap-6 bg-background-700 rounded shadow-xl shadow-black/25">
            <div className="flex items-center gap-4 lg:gap-7">
              <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
                Registros
              </h3>
              <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-background-700 rounded-full" />
            </div>

            <TableMovements />
          </div>
        </div>
      </main>
    </div>
  )
}
