'use client'

import { useState } from 'react'
import { LuArrowDownCircle, LuArrowUpCircle, LuWallet } from 'react-icons/lu'

import AlertModal from 'components/AlertModal'
import Button from 'components/Button'
import CardValue from 'components/CardValue'
import Container from 'components/Container'
import Form from 'components/Form'
import Header from 'components/Header'
import { Input } from 'components/Inputs/Input'
import UpdateModal from 'components/UpdateModal'

export default function MovementsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showAlertModal, setShowAlertModal] = useState(false)

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

      <div className="px-8 py-5 flex flex-col gap-10 bg-800 rounded shadow-xl shadow-black/25">
        <div className="flex items-center gap-4 lg:gap-7">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
            Incluir registro
          </h3>
          <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-800 rounded-full" />
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
            {/* <Checkbox name="type" type="radio" label="Despesa" />
                <Checkbox name="type" type="radio" label="Receita" /> */}
          </div>

          <Button className="w-full 2xl:w-fit">Adicionar</Button>
        </Form>
      </div>

      <div className="px-8 py-5 flex flex-col gap-6 bg-800 rounded shadow-xl shadow-black/25">
        <div className="flex items-center gap-4 lg:gap-7">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
            Registros
          </h3>
          <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-800 rounded-full" />
        </div>

        {/* <Table
            columns={columns}
            data={data}
            isEdit={handleOpenUpdateModal}
            isDelete={handleShowAlertModal}
            showActions
          /> */}
      </div>

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
