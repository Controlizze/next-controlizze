'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LuImagePlus, LuUser } from 'react-icons/lu'

import AlertModal from 'components/AlertModal'
import Button from 'components/Button'
import Container from 'components/Container'
import Form from 'components/Form'
import Header from 'components/Header'
import { Input } from 'components/Inputs/Input'
import { InputSelect } from 'components/InputSelect'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCity } from 'hooks/useCity'
import { useStates } from 'hooks/useStates'
import { useUser } from 'hooks/useUser'
import Cookies from 'js-cookie'
import { UserRequest } from 'types/User'
import { z } from 'zod'

const schema = z.object({
  name: z.string().transform((name) => {
    return name.length > 0
      ? name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
          })
          .join(' ')
      : 'Nome não informado'
  }),
  email: z.string().email().toLowerCase(),
  date_birth: z.string(),
  cel: z.coerce.number(),
  city: z.coerce.number(),
  state: z.coerce.number()
})

type DataProps = z.infer<typeof schema>

export default function UserProfilePage() {
  const { register, handleSubmit, reset } = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showAlertModal, setShowAlertModal] = useState(false)

  const { update } = useUser()
  const { cities } = useCity()
  const { states } = useStates()

  const handleUpdateUser = async (data: UserRequest) => {
    await update.mutateAsync(data)
    setShowAlertModal(!showAlertModal)
    reset()
  }

  useEffect(() => {
    const user_name = Cookies.get('nextfinance.username')
    const user_email = Cookies.get('nextfinance.useremail')
    if (user_name && user_email) {
      setName(user_name)
      setEmail(user_email)
    }

    if (showAlertModal) {
      setTimeout(() => {
        setShowAlertModal(!showAlertModal)
      }, 3000)
      window.location.reload()
    }
  }, [showAlertModal])

  return (
    <Container
      withSidebar
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      className="lg:justify-start"
    >
      <Header
        category="Outros"
        page="Perfil do Usuário"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="p-8 flex flex-col gap-6 bg-800 rounded shadow-xl shadow-black/25">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="relative flex flex-col justify-center items-center">
            <div className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] flex justify-center items-center bg-600 rounded-full">
              <LuUser className="text-3xl xl:text-4xl text-zinc-400" />
            </div>
            <button className="absolute bottom-1 right-1 p-2 lg:p-3 bg-primary-500 rounded-full">
              <LuImagePlus className="text-base lg:text-lg text-white" />
            </button>
          </div>
          <p className="text-base lg:text-lg font-medium text-white">{name}</p>
        </div>

        <div className="mt-6 flex items-center gap-4 lg:gap-7">
          <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
            Alterar dados
          </h3>
          <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-700 rounded-full" />
        </div>

        <Form
          onSubmit={handleSubmit(handleUpdateUser)}
          className="items-center"
        >
          <div className="w-full grid grid-rows-6 xl:grid-rows-none xl:grid-cols-16 grid-flow-col xl:grid-flow-row gap-4">
            <Input
              {...register('name')}
              name="name"
              type="text"
              placeholder="Nome"
              defaultValue={name}
              label="Nome"
              scale="sm"
              className="xl:col-span-4"
            />

            <Input
              {...register('email')}
              name="email"
              type="text"
              placeholder="exemplo@gmail.com"
              defaultValue={email}
              label="Email"
              scale="sm"
              className="xl:col-span-3"
            />

            <Input
              {...register('date_birth')}
              name="date_birth"
              type="text"
              placeholder="Opcional"
              label="Data nascimento"
              scale="sm"
              className="xl:col-span-2"
            />

            <Input
              {...register('cel')}
              name="cel"
              type="text"
              placeholder="Opcional"
              label="Celular"
              scale="sm"
              className="xl:col-span-2"
            />

            <InputSelect
              {...register('city')}
              name="city"
              label="Cidade"
              data={cities}
              className="xl:col-span-3"
            />

            <InputSelect
              {...register('state')}
              name="state"
              label="Estado"
              data={states}
              className="xl:col-span-2"
            />
          </div>

          <Button className="w-full mt-10">Salvar</Button>
        </Form>
      </div>
      {showAlertModal && (
        <AlertModal
          showAlertModal={showAlertModal}
          setShowAlertModal={setShowAlertModal}
          text="Usuário alterado com sucesso!"
        />
      )}
    </Container>
  )
}
