import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { LuX } from 'react-icons/lu'

import Button from './Button'
import Form from './Form'
import { InputRadio } from './InputRadio'
import { Input } from './Inputs/Input'
import { InputSelect } from './InputSelect'

import { useCategory } from 'hooks/useCategory'
import { useMovement } from 'hooks/useMovement'
import { MovementRequest } from 'types/Movement'
import { z } from 'zod'

const schema = z.object({
  date: z.string(),
  description: z.string(),
  category: z.coerce.number(),
  value: z.coerce.number(),
  type: z.coerce.number()
})

type DataProps = z.infer<typeof schema>

type ModalProps = {
  selectedRow: any
  showUpdateModal: boolean
  setShowUpdateModal: Dispatch<SetStateAction<boolean>>
}

export default function UpdateModal({
  selectedRow,
  showUpdateModal,
  setShowUpdateModal
}: ModalProps) {
  const { register, handleSubmit } = useForm<DataProps>()

  const { update } = useMovement()
  const { categories } = useCategory()

  const id = selectedRow.id

  const handleSubmitMovement = async (data: MovementRequest) => {
    await update.mutateAsync({ ...data, id })
    setShowUpdateModal(!showUpdateModal)
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full min-h-screen ${
        showUpdateModal ? 'flex' : 'hidden'
      } justify-center items-center bg-900/80 z-[120]`}
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

        <Form
          onSubmit={handleSubmit(handleSubmitMovement)}
          className="items-center"
        >
          <div className="w-full grid grid-rows-4 grid-flow-col gap-4">
            <Input
              {...register('date')}
              name="data"
              type="text"
              defaultValue={selectedRow.date}
              placeholder="dd/mm/yyyy"
              label="Data"
              scale="sm"
            />

            <Input
              {...register('description')}
              name="description"
              type="text"
              defaultValue={selectedRow.description}
              placeholder="Digite a descrição"
              label="Descrição"
              scale="sm"
            />

            <InputSelect
              {...register('category')}
              name="category"
              label="Categoria"
              data={categories}
            />

            <Input
              {...register('value')}
              name="value"
              type="text"
              defaultValue={selectedRow.value}
              placeholder="Digite o valor"
              label="Valor"
              scale="sm"
            />
          </div>

          <div className="w-full 2xl:w-fit my-3 flex justify-around xl:justify-center items-center xl:gap-16">
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

          <Button className="w-full">Salvar</Button>
        </Form>
      </div>
    </div>
  )
}
