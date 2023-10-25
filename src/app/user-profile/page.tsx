'use client'

import { useForm } from 'react-hook-form'
import { LuImagePlus } from 'react-icons/lu'

import { Button } from 'components/Button'
import { Form } from 'components/Form/Form'
import { Input } from 'components/Form/Input/Input'
import { Select } from 'components/Form/Input/Select'
import Header from 'components/Header'

// import { Checkbox } from 'components/Form/Checkbox'

export default function UserProfilePage() {
  const { register, handleSubmit } = useForm()

  // const [openSidebar, setOpenSidebar] = useState(false)

  // const closeSidebar = useCallback(
  //   () => setOpenSidebar(!openSidebar),
  //   [openSidebar]
  // )

  return (
    <>
      {/* {openSidebar && <Sidebar close={closeSidebar} />} */}
      {/* <Sidebar /> */}
      <Header category="Outros" page="Perfil do Usuário" />

      <main className="mt-[84px] lg:mt-0 px-7 py-5 lg:p-8 flex flex-1 flex-col justify-between gap-4 bg-900">
        <div className="px-8 py-5 flex flex-col gap-6 bg-800 rounded shadow-xl shadow-black/25">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="relative flex flex-col justify-center items-center">
              <div className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] bg-400 rounded-full"></div>
              <button className="absolute bottom-1 right-1 p-2 lg:p-3 bg-primary-500 rounded-full">
                <LuImagePlus className="text-base lg:text-lg text-white" />
              </button>
            </div>
            <p className="text-base lg:text-lg font-medium text-white">
              Nome do Usuário
            </p>
          </div>

          <div className="flex items-center gap-4 lg:gap-7">
            <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
              Alterar dados
            </h3>
            <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-700 rounded-full" />
          </div>

          <Form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="items-center"
          >
            <div className="w-full grid grid-rows-6 xl:grid-rows-none xl:grid-cols-12 grid-flow-col xl:grid-flow-row gap-4">
              <Input
                {...register('name')}
                name="name"
                type="text"
                placeholder="Nome do usuário"
                label="Nome"
                scale="sm"
                className="xl:col-span-2"
              />

              <Input
                {...register('email')}
                name="email"
                type="text"
                placeholder="exemplo@gmail.com"
                label="Email"
                scale="sm"
                className="xl:col-span-3"
              />

              <Input
                {...register('datebirth')}
                name="datebirth"
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

              <Input
                {...register('city')}
                name="city"
                type="text"
                placeholder="Opcional"
                label="Cidade"
                scale="sm"
                className="xl:col-span-2"
              />

              <Select
                {...register('state')}
                name="state"
                label="Estado"
                scale="sm"
                className="xl:col-span-1"
              />
            </div>

            <Button className="w-full">Salvar</Button>
          </Form>
        </div>
      </main>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const apiClient = getAPIClient(ctx)
//   const { ['nextauth.token']: token } = parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }

//   await apiClient.get('/users')

//   return {
//     props: {}
//   }
// }
