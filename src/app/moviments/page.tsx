import {
  LuArrowDownCircle,
  LuArrowUpCircle,
  LuMenu,
  LuWallet
} from 'react-icons/lu'

export const metadata = {
  title: 'Dashboard - Controlizze'
}

export default function MovimentsPage() {
  return (
    <div className="w-full h-full bg-background-900">
      <header className="fixed w-full h-20 px-5 flex items-center gap-2 bg-background-700 shadow-xl shadow-default">
        <button className="w-11 h-11 flex justify-center items-center bg-background-500 rounded-full">
          <LuMenu className="text-white text-2xl" />
        </button>

        <div className="w-fit flex flex-col justify-center gap-0">
          <h3 className="text-xs text-zinc-400 uppercase">Dashboard</h3>
          <h1 className="text-xl font-bold text-white">Movimentações</h1>
        </div>
      </header>

      <main className="w-full px-7 py-5 mt-20 flex flex-1 flex-col gap-8">
        {/*Cards*/}
        <div className="flex flex-col gap-4">
          <div className="w-full px-5 py-3 flex flex-col gap-2 bg-background-700 rounded shadow-xl shadow-default">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg font-medium text-white">Despesas</h3>
                <div
                  className={`w-3/5 h-1 bg-gradient-to-r from-red-700 to-background-700 rounded-full`}
                ></div>
              </div>
              <LuArrowDownCircle className="text-3xl text-red-700" />
            </div>
            <h2 className="text-3xl font-bold text-white text-center">
              R$0.00
            </h2>
          </div>

          <div className="w-full px-5 py-3 flex flex-col gap-2 bg-background-700 rounded shadow-xl shadow-default">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg font-medium text-white">Receitas</h3>
                <div
                  className={`w-3/5 h-1 bg-gradient-to-r from-green-700 to-background-700 rounded-full`}
                ></div>
              </div>
              <LuArrowUpCircle className="text-3xl text-green-700" />
            </div>
            <h2 className="text-3xl font-bold text-white text-center">
              R$0.00
            </h2>
          </div>

          <div className="w-full px-5 py-3 flex flex-col gap-2 bg-background-700 rounded shadow-xl shadow-default">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg font-medium text-white">Saldo</h3>
                <div
                  className={`w-3/5 h-1 bg-gradient-to-r from-orange-700 to-background-700 rounded-full`}
                ></div>
              </div>
              <LuWallet className="text-3xl text-orange-700" />
            </div>
            <h2 className="text-3xl font-bold text-white text-center">
              R$0.00
            </h2>
          </div>
        </div>

        {/*Card*/}
        <div className="w-full p-5 flex flex-col gap-7 bg-background-700 rounded shadow-xl shadow-default">
          <div className="flex items-center gap-7">
            <h3 className="text-xl font-semibold text-white">
              Incluir Registro
            </h3>
            <div
              className={`h-1 flex flex-auto bg-gradient-to-r from-primary-500 to-background-700 rounded-full`}
            ></div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <fieldset className="w-full flex flex-col gap-0.5">
              <label
                htmlFor="date"
                className="text-xs font-medium text-zinc-400"
              >
                Informe a data
              </label>
              <div className="relative w-full flex">
                <input
                  id="date"
                  type="text"
                  className="w-full h-full px-3 py-2 rounded outline-none"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </fieldset>

            <fieldset className="w-full flex flex-col gap-0.5">
              <label
                htmlFor="description"
                className="text-xs font-medium text-zinc-400"
              >
                Informe a descrição
              </label>
              <div className="relative w-full flex">
                <input
                  id="description"
                  type="text"
                  className="w-full h-full px-3 py-2 rounded outline-none"
                  placeholder="Descrição"
                />
              </div>
            </fieldset>

            <fieldset className="w-full flex flex-col gap-0.5">
              <label
                htmlFor="category"
                className="text-xs font-medium text-zinc-400"
              >
                Informe a categoria
              </label>
              <div className="relative w-full flex">
                <input
                  id="category"
                  type="text"
                  className="w-full h-full px-3 py-2 rounded outline-none"
                  placeholder="Categoria"
                />
              </div>
            </fieldset>

            <fieldset className="w-full flex flex-col gap-0.5">
              <label
                htmlFor="value"
                className="text-xs font-medium text-zinc-400"
              >
                Informe o valor
              </label>
              <div className="relative w-full flex">
                <input
                  id="value"
                  type="text"
                  className="w-full h-full px-3 py-2 rounded outline-none"
                  placeholder="Valor"
                />
              </div>
            </fieldset>
          </div>

          <div className="flex justify-between items-center">
            <fieldset className="flex items-center gap-1">
              <input
                id="type-expense"
                type="radio"
                name="type"
                className="w-4 h-4 accent-primary-500"
              />
              <label htmlFor="type-expense" className="text-base text-white">
                Despesa
              </label>
            </fieldset>

            <fieldset className="flex items-center gap-1">
              <input
                id="type-revenue"
                type="radio"
                name="type"
                className="w-4 h-4 accent-primary-500"
              />
              <label htmlFor="type-revenue" className="text-base text-white">
                Receita
              </label>
            </fieldset>
          </div>

          <button className="h-12 px-3 flex justify-center items-center bg-primary-500 hover:opacity-75 rounded shadow-lg shadow-default transition-all text-sm font-semibold uppercase">
            Adicionar
          </button>
        </div>

        {/*Card*/}
        <div className="w-full p-5 flex flex-col gap-7 bg-background-700 rounded shadow-xl shadow-default">
          <div className="flex items-center gap-7">
            <h3 className="text-xl font-semibold text-white">Registros</h3>
            <div
              className={`h-1 flex flex-auto bg-gradient-to-r from-primary-500 to-background-700 rounded-full`}
            ></div>
          </div>
        </div>
      </main>
    </div>
  )
}
