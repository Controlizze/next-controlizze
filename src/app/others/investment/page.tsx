'use client'

import { useState } from 'react'

import CardLink from 'components/CardLink'
import Container from 'components/Container'
import Header from 'components/Header'

import { banks, brokers } from 'mocks/mocks'

export default function InvestmentPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Container
      withSidebar
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
    >
      <Header
        category="Outros"
        page="Investimentos"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

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
    </Container>
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
