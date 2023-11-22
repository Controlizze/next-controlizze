'use client'

import { LuPencil, LuTrash2 } from 'react-icons/lu'

import TableButton from './TableButton'

type TableHeader = {
  id: string
  name: string
}

type TableProps = {
  columns: TableHeader[]
  data: any[]
  showActions?: boolean
  isEdit: () => void
  isDelete: () => void
}

export default function Table({
  columns,
  data,
  showActions,
  isEdit,
  isDelete
}: TableProps) {
  return (
    <table className="max-w-full w-full h-[300px] block bg-900 border-2 border-600 border-separate border-spacing-0.5 rounded overflow-auto">
      <thead className="whitespace-nowrap">
        <tr className="h-10">
          {columns.map((col) => (
            <th
              key={col.id}
              className={`${col.id === 'date' ? 'sm:w-[10%]' : ''} ${
                col.id === 'description' ? 'sm:w-[40%]' : ''
              } ${col.id === 'category' ? 'sm:w-[15%]' : ''} ${
                col.id === 'value' ? 'sm:w-[10%]' : ''
              } ${
                col.id === 'type' ? 'sm:w-[10%]' : ''
              } sticky top-0.5 px-4 bg-700 font-semibold text-start text-primary-500 uppercase`}
            >
              {col.name}
            </th>
          ))}
          {showActions && (
            <th className="sticky top-0.5 sm:w-[15%] px-4 bg-700 font-semibold text-primary-500 uppercase">
              Ações
            </th>
          )}
        </tr>
      </thead>
      <tbody className="whitespace-nowrap">
        {data.map((row, id) => (
          <tr key={id} className="h-10">
            {columns.map((col) => (
              <td key={col.id} className="px-4 bg-800 text-white">
                {String(row[col.id])}
              </td>
            ))}
            {showActions && (
              <td className="h-10 px-4 flex justify-center items-center gap-2 bg-800">
                <TableButton
                  action={isEdit}
                  icon={LuPencil}
                  textColor="orange"
                  btnColor="orange"
                >
                  Editar
                </TableButton>
                <TableButton
                  action={isDelete}
                  icon={LuTrash2}
                  textColor="red"
                  btnColor="red"
                >
                  Excluir
                </TableButton>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
