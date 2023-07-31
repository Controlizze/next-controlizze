import {
  BsChevronRight,
  BsArrowDownCircleFill,
  BsArrowUpCircleFill,
  BsWalletFill
} from 'react-icons/bs'

import Container from 'components/Container'

export const metadata = {
  title: 'Dashboard - Controlizze'
}

export default function Dashboard() {
  return (
    <Container className="flex">
      <div className="w-full h-full p-14 flex flex-col gap-14">
        <div className="w-full flex items-center gap-2">
          <BsChevronRight className="w-3 h-3 fill-zinc-500" />
          <span className="text-lg font-medium text-zinc-500">Dashboard</span>
        </div>

        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full flex justify-between gap-10">
            {/* Card */}
            <div className="w-full h-40 px-8 py-6 flex flex-col justify-between bg-black-700 rounded-2xl shadow-xl">
              <div className="w-full flex justify-between items-center">
                <span className="text-4xl font-medium text-white">
                  Despesas
                </span>
                <BsArrowDownCircleFill className="w-11 h-11 fill-red-700" />
              </div>
              <div className="w-full flex justify-center items-center">
                <span className="text-5xl font-bold text-white">R$0.00</span>
              </div>
            </div>

            {/* Card */}
            <div className="w-full h-40 px-8 py-6 flex flex-col justify-between bg-black-700 rounded-2xl shadow-xl">
              <div className="w-full flex justify-between items-center">
                <span className="text-4xl font-medium text-white">
                  Receitas
                </span>
                <BsArrowUpCircleFill className="w-11 h-11 fill-primary-700" />
              </div>
              <div className="w-full flex justify-center items-center">
                <span className="text-5xl font-bold text-white">R$0.00</span>
              </div>
            </div>

            {/* Card */}
            <div className="w-full h-40 px-8 py-6 flex flex-col justify-between bg-black-700 rounded-2xl shadow-xl">
              <div className="w-full flex justify-between items-center">
                <span className="text-4xl font-medium text-white">Total</span>
                <BsWalletFill className="w-11 h-11 fill-orange-700" />
              </div>
              <div className="w-full flex justify-center items-center">
                <span className="text-5xl font-bold text-white">R$0.00</span>
              </div>
            </div>
          </div>

          <div className="w-full px-8 py-5 flex justify-between items-center gap-4 bg-black-700 rounded-2xl shadow-xl">
            <div className="flex items-center gap-4">
              {/* Input */}
              <div className="w-48 flex flex-col gap-1">
                <label htmlFor="date" className=" text-xs text-black-100">
                  Informe a data
                </label>
                <div className="px-4 py-2 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-black-100 text-base">
                  <input
                    type="date"
                    placeholder="Data de nascimento"
                    className="w-full outline-none"
                  />
                  {/* <BsFillCalendarFill className="w-5 h-5 fill-black-100" /> */}
                </div>
              </div>

              {/* Input */}
              <div className="w-96 flex flex-col gap-1">
                <label
                  htmlFor="description"
                  className=" text-xs text-black-100"
                >
                  Informe a descrição
                </label>
                <div className="px-4 py-2 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-black-100 text-base">
                  <input
                    type="text"
                    placeholder="Descrição"
                    className="w-full outline-none"
                  />
                  {/* <BsFillCalendarFill className="w-5 h-5 fill-black-100" /> */}
                </div>
              </div>

              {/* Input */}
              <div className="w-48 flex flex-col gap-1">
                <label htmlFor="category" className=" text-xs text-black-100">
                  Informe a categoria
                </label>
                <div className="px-4 py-2 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-black-100 text-base">
                  <input
                    type="text"
                    placeholder="Categoria"
                    className="w-full outline-none"
                  />
                  {/* <BsFillCalendarFill className="w-5 h-5 fill-black-100" /> */}
                </div>
              </div>

              {/* Input */}
              <div className="w-48 flex flex-col gap-1">
                <label htmlFor="value" className=" text-xs text-black-100">
                  Informe o valor
                </label>
                <div className="px-4 py-2 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-black-100 text-base">
                  <input
                    type="text"
                    placeholder="Valor"
                    className="w-full outline-none"
                  />
                  {/* <BsFillCalendarFill className="w-5 h-5 fill-black-100" /> */}
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              {/* Input Radio */}
              <div className="flex items-center gap-2">
                <input type="radio" className="w-5 h-5" />
                <label
                  htmlFor=""
                  className="text-xs font-normal text-black-100"
                >
                  Despesa
                </label>
              </div>

              {/* Input Radio */}
              <div className="flex items-center gap-2">
                <input type="radio" className="w-5 h-5" />
                <label
                  htmlFor=""
                  className="text-xs font-normal text-black-100"
                >
                  Receita
                </label>
              </div>
            </div>

            <button className="w-32 px-4 py-2 bg-primary-500 hover:bg-primary-300 rounded-xl shadow-lg transition-all text-xl font-semibold text-white">
              Acessar
            </button>
          </div>

          <div className="w-full h-full px-8 py-6 flex flex-col justify-between gap-5 bg-black-700 rounded-2xl shadow-xl">
            <div className="w-full flex items-center">
              <span className="text-2xl font-semibold text-white">
                Registros
              </span>
            </div>

            <div className="w-full h-full flex flex-col gap-[1px] rounded-xl overflow-hidden">
              {/* Tabela */}
              <div className="w-full h-full bg-primary-500"></div>

              <div className="w-full h-full bg-black-500"></div>
              <div className="w-full h-full bg-black-500"></div>
              <div className="w-full h-full bg-black-500"></div>
              <div className="w-full h-full bg-black-500"></div>
              <div className="w-full h-full bg-black-500"></div>
            </div>

            <div className="w-full h-10 bg-black-500"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}
