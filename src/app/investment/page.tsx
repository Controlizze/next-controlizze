'use client'

import CardLink from 'components/CardLink'
import Header from 'components/Header'

import { banks, brokers } from 'mocks/mocks'

// import { Checkbox } from 'components/Form/Checkbox'

export default function InvestmentPage() {
  // const [openSidebar, setOpenSidebar] = useState(false)

  // const closeSidebar = useCallback(
  //   () => setOpenSidebar(!openSidebar),
  //   [openSidebar]
  // )

  return (
    <>
      {/* {openSidebar && <Sidebar close={closeSidebar} />} */}
      {/* <Sidebar /> */}
      <Header category="Outros" page="Investimento" />

      <main className="mt-[84px] lg:mt-0 px-7 py-5 lg:p-8 flex flex-1 flex-col justify-between gap-4 bg-900">
        <div className="px-8 py-5 flex flex-col gap-6 bg-800 rounded shadow-xl shadow-black/25">
          <div className="flex items-center gap-4 lg:gap-7">
            <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
              Onde guardar?
            </h3>
            <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-800 rounded-full" />
          </div>

          <div className="flex gap-4 rounded shadow-lg shadow-black/25 overflow-x-auto">
            {banks.map((bank) => (
              <CardLink
                key={bank.url}
                url={bank.url}
                bg={bank.bg}
                img={bank.img}
              />
            ))}
          </div>
        </div>

        <div className="px-8 py-5 flex flex-col gap-6 bg-800 rounded shadow-xl shadow-black/25">
          <div className="flex items-center gap-4 lg:gap-7">
            <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
              Onde investir?
            </h3>
            <div className="h-1 flex-1 bg-gradient-to-r from-primary-500 to-800 rounded-full" />
          </div>

          <div className="flex gap-4 rounded shadow-lg shadow-black/25 overflow-x-auto">
            {brokers.map((broker) => (
              <CardLink
                key={broker.url}
                url={broker.url}
                bg={broker.bg}
                img={broker.img}
              />
            ))}
          </div>
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
