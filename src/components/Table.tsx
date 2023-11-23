'use client'

import { useState } from 'react'
import { LuPencil, LuTrash2 } from 'react-icons/lu'

import TableButton from './TableButton'
import UpdateModal from './UpdateModal'

import { useMovement } from 'hooks/useMovement'

type TableHeader = {
  id: string
  name: string
}

type TableProps = {
  columns: TableHeader[]
  data: any[]
  keyId: string
  showActions?: boolean
}

export default function Table({
  columns,
  data,
  keyId,
  showActions
}: TableProps) {
  const [selectedRow, setSelectedRow] = useState([])
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  const { exclude } = useMovement()

  const handleUpdate = (row: any) => {
    setSelectedRow(row)
    setShowUpdateModal(!showUpdateModal)
  }

  const handleDelete = async (id: number) => {
    await exclude.mutateAsync(id)
  }

  return (
    <>
      <table className="max-w-full w-full h-[300px] block bg-900 border-2 border-600 border-separate border-spacing-0.5 rounded overflow-auto">
        <thead className="whitespace-nowrap">
          <tr className="h-10">
            {columns.map((col) => (
              <th
                key={col.id}
                className={`${col.id === 'date' ? 'sm:w-[10%]' : ''} ${
                  col.id === 'description' ? 'sm:w-[50%]' : ''
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
                    icon={LuPencil}
                    btnColor="orange"
                    textColor="orange"
                    action={() => handleUpdate(row)}
                  >
                    Editar
                  </TableButton>
                  <TableButton
                    icon={LuTrash2}
                    btnColor="red"
                    textColor="red"
                    action={() => handleDelete(row[keyId])}
                  >
                    Excluir
                  </TableButton>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateModal && (
        <UpdateModal
          selectedRow={selectedRow}
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
    </>
  )
}
