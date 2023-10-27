import { LuPencil, LuTrash2 } from 'react-icons/lu'

import { Movement } from 'types/Movement'

const data: Movement[] = [
  {
    id: 1,
    date: '27/10/2023',
    description: 'Aluguel',
    category: 'Moradia',
    value: 1000,
    type: 'Despesa'
  },
  {
    id: 2,
    date: '27/10/2023',
    description: 'Aluguel',
    category: 'Moradia',
    value: 1000,
    type: 'Despesa'
  }
]

type TableHeader = {
  id: string
  name: string
}

type TableProps = {
  columns: TableHeader[]
  // data?: any
  showActions?: boolean
  isEdit: () => void
  isDelete: () => void
}

export default function Table({
  columns,
  // data,
  showActions,
  isEdit,
  isDelete
}: TableProps) {
  return (
    <div className="min-h-[270px]">
      <table className="w-full min-h-[207px] p-0.5 flex flex-col gap-0.5 bg-900 border-2 border-700 rounded shadow-lg shadow-black/25 overflow-auto">
        <thead className="min-w-fit">
          <tr className="w-full h-10 flex gap-0.5">
            {columns.map((col) => (
              <th
                key={col.id}
                className={`min-w-[160px] w-full h-full px-4 ${
                  !showActions && col.id === 'actions' ? 'hidden' : 'flex'
                } ${
                  col.id === 'actions' ? 'justify-center' : 'justify-start'
                } items-center bg-700`}
              >
                <span className="font-semibold text-primary-500 uppercase">
                  {col.name}
                </span>
              </th>
            ))}
            {showActions && (
              <th
                className={`min-w-[160px] w-full h-full px-4 flex justify-center items-center bg-700`}
              >
                <span className="font-semibold text-primary-500 uppercase">
                  Ações
                </span>
              </th>
            )}
          </tr>
        </thead>

        <tbody className="min-w-fit flex flex-col gap-0.5">
          {data.map((row, id) => (
            <tr key={id} className="h-10 flex gap-0.5">
              {columns.map((col) => (
                <td
                  key={col.id}
                  className="min-w-[160px] w-full h-full px-4 flex justify-start items-center bg-800"
                >
                  <span className="text-white">{row[col.id]}</span>
                </td>
              ))}
              {showActions && (
                <td className="min-w-[160px] w-full h-full px-4 flex justify-center items-center gap-5 bg-800">
                  <button
                    onClick={isEdit}
                    className="w-full p-1 flex justify-center items-center gap-2 border border-orange-600 hover:bg-orange-600/10 rounded transition-all text-orange-600"
                  >
                    <LuPencil className="text-base" />
                    <span className="text-xs">Editar</span>
                  </button>

                  <button
                    onClick={isDelete}
                    className="w-full p-1 flex justify-center items-center gap-2 border border-red-600 hover:bg-red-600/10 rounded transition-all text-red-600"
                  >
                    <LuTrash2 className="text-base" />
                    <span className="text-xs">Excluir</span>
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
