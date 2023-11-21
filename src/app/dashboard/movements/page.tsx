'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  LuArrowDownCircle,
  LuArrowUpCircle,
  LuFilter,
  LuWallet
} from 'react-icons/lu'

import AlertModal from 'components/AlertModal'
import Button from 'components/Button'
import CardValue from 'components/CardValue'
import Container from 'components/Container'
import FilterModal from 'components/FilterModal'
import Form from 'components/Form'
import Header from 'components/Header'
import { InputRadio } from 'components/InputRadio'
import { Input } from 'components/Inputs/Input'
import { InputSelect } from 'components/InputSelect'
import Table from 'components/Table'
import UpdateModal from 'components/UpdateModal'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCategory } from 'hooks/useCategory'
import { useMovement } from 'hooks/useMovement'
import { columns } from 'mocks/mocks'
import { z } from 'zod'

const schema = z.object({
  date: z.string(),
  description: z.string(),
  category: z.coerce.number(),
  value: z.coerce.number(),
  type: z.coerce.number()
})

type DataProps = z.infer<typeof schema>

export default function MovementsPage() {
  const { register, handleSubmit } = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [showAlertModal, setShowAlertModal] = useState(false)

  const { categories } = useCategory()
  const { mutation } = useMovement()

  const handleShowUpdateModal = () => {
    setShowUpdateModal(!showUpdateModal)
  }

  const handleShowAlertModal = () => {
    setShowAlertModal(!showAlertModal)
  }

  return (
    <Container
      withSidebar
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
    >
      <Header
        category="Dashboard"
        page="Movimentações"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

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

      <div className="px-8 py-5 flex flex-col gap-8 bg-800 rounded shadow-xl shadow-black/25">
        <div className="flex items-center gap-4 lg:gap-7">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
            Incluir registro
          </h3>
          <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-800 rounded-full" />
        </div>

        <Form
          direction="row"
          className="items-center"
          onSubmit={handleSubmit(async (data) => await mutation.mutate(data))}
        >
          <div className="w-full grid grid-rows-4 xl:grid-rows-none xl:grid-cols-12 grid-flow-col xl:grid-flow-row gap-4">
            <Input
              {...register('date')}
              name="date"
              type="text"
              placeholder="dd/mm/yyyy"
              label="Data"
              scale="sm"
              className="xl:col-span-2"
            />

            <Input
              {...register('description')}
              name="description"
              type="text"
              placeholder="Digite a descrição"
              label="Descrição"
              scale="sm"
              className="xl:col-span-6"
            />

            <InputSelect
              {...register('category')}
              name="category"
              label="Categoria"
              data={categories}
              className="xl:col-span-2"
            />

            <Input
              {...register('value')}
              name="value"
              type="text"
              placeholder="Digite o valor"
              label="Valor"
              scale="sm"
              className="xl:col-span-2"
            />
          </div>

          <div className="w-full 2xl:w-fit flex justify-around xl:justify-center items-center xl:gap-16 2xl:gap-4">
            <InputRadio
              {...register('type')}
              name="type"
              type="radio"
              label="Despesa"
              value={1}
              defaultChecked
            />
            <InputRadio
              {...register('type')}
              name="type"
              type="radio"
              label="Receita"
              value={2}
            />
          </div>

          <Button type="submit" className="w-full 2xl:w-fit">
            Adicionar
          </Button>
        </Form>
      </div>

      <div className="px-8 py-5 flex flex-col gap-6 bg-800 rounded shadow-xl shadow-black/25">
        <div className="flex items-center gap-4 lg:gap-7">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
            Registros
          </h3>
          <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-800 rounded-full" />
          <Button
            onClick={() => setShowFilterModal(!showFilterModal)}
            className="h-8 gap-2"
          >
            <LuFilter className="text-xl" />
            <span className="hidden lg:block">Filtrar</span>
          </Button>
        </div>

        <Table
          columns={columns}
          showActions
          isEdit={handleShowUpdateModal}
          isDelete={handleShowAlertModal}
        />
      </div>

      {showFilterModal && (
        <FilterModal
          showFilterModal={showFilterModal}
          setShowFilterModal={setShowFilterModal}
        />
      )}

      {showUpdateModal && (
        <UpdateModal
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}

      {showAlertModal && (
        <AlertModal
          showAlertModal={showAlertModal}
          setShowAlertModal={setShowAlertModal}
          text="Deseja continuar com a exclusão do seu registro?"
        />
      )}
    </Container>
  )
}
