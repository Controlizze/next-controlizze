import { Dispatch, SetStateAction } from 'react'
import { LuX } from 'react-icons/lu'

import Button from './Button'
import Form from './Form'
import { Input } from './Inputs/Input'

type ModalProps = {
  showUpdateModal: boolean
  setShowUpdateModal: Dispatch<SetStateAction<boolean>>
}

export default function UpdateModal({
  showUpdateModal,
  setShowUpdateModal
}: ModalProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full min-h-screen ${
        showUpdateModal ? 'flex' : 'hidden'
      } justify-center items-center bg-900/60 z-[120]`}
    >
      <div className="min-w-[80%] lg:min-w-[30%] p-8 flex flex-col gap-10 bg-800 rounded shadow-xl shadow-black/25">
        <div className="flex items-center gap-4 lg:gap-7">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
            Atualizar registro
          </h3>
          <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-800 rounded-full" />
          <LuX
            onClick={() => setShowUpdateModal(!showUpdateModal)}
            className="text-xl lg:text-2xl text-white cursor-pointer"
          />
        </div>

        <Form className="items-center">
          <div className="w-full grid grid-rows-4 grid-flow-col gap-4">
            <Input
              name="data"
              type="text"
              placeholder="Digite a data"
              label="Data"
              scale="sm"
            />

            <Input
              name="data"
              type="text"
              placeholder="Digite a descrição"
              label="Descrição"
              scale="sm"
            />

            <Input
              name="category"
              type="text"
              placeholder="Digite a categoria"
              label="Categoria"
              scale="sm"
            />

            <Input
              name="value"
              type="text"
              placeholder="Digite o valor"
              label="Valor"
              scale="sm"
            />
          </div>

          <div className="w-full 2xl:w-fit flex justify-around xl:justify-center items-center xl:gap-16 2xl:gap-4">
            {/* <Checkbox name="type" type="radio" label="Despesa" />
                <Checkbox name="type" type="radio" label="Receita" /> */}
          </div>

          <Button className="w-full">Salvar</Button>
        </Form>
      </div>
    </div>
  )
}
