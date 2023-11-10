'use client'

import { LuPencil, LuTrash2 } from 'react-icons/lu'

import TableButton from './TableButton'

type TableHeader = {
  id: string
  name: string
}

type TableProps = {
  columns: TableHeader[]
  showActions?: boolean
}

export default function Table({ columns, showActions }: TableProps) {
  return (
    <table className="max-w-[279px] 2xl:max-w-full w-full h-[300px] block bg-900 border-2 border-600 border-separate border-spacing-0.5 overflow-auto">
      <thead className="whitespace-nowrap">
        <tr className="h-10">
          {columns.map((col) => (
            <th
              key={col.id}
              className={`${col.id === 'date' ? '2xl:w-[12%]' : ''} ${
                col.id === 'description' ? '2xl:w-[40%]' : ''
              } ${col.id === 'category' ? '2xl:w-[15%]' : ''} ${
                col.id === 'value' ? '2xl:w-[10%]' : ''
              } ${
                col.id === 'type' ? '2xl:w-[10%]' : ''
              } sticky top-0.5 px-4 bg-700 font-semibold text-start text-primary-500 uppercase`}
            >
              {col.name}
            </th>
          ))}
          {showActions && (
            <th className="sticky top-0.5 2xl:w-[15%] px-4 bg-700 font-semibold text-primary-500 uppercase">
              Ações
            </th>
          )}
        </tr>
      </thead>
      <tbody className="whitespace-nowrap">
        <tr className="h-10">
          <td className="px-4 bg-800 text-white">09/11/2023</td>
          <td className="px-4 bg-800 text-white">Bolsa da DELLsssssssssss</td>
          <td className="px-4 bg-800 text-white">Bolsa da DELL</td>
          <td className="px-4 bg-800 text-white">Bolsa da DELL</td>
          <td className="px-4 bg-800 text-white">Bolsa da DELL</td>
          {showActions && (
            <td className="h-10 px-4 flex justify-center items-center gap-2 bg-800">
              <TableButton icon={LuPencil} textColor="orange" btnColor="orange">
                Editar
              </TableButton>
              <TableButton icon={LuTrash2} textColor="red" btnColor="red">
                Excluir
              </TableButton>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  )
}
