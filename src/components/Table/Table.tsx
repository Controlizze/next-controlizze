import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip
} from '@nextui-org/react'
import { Key, useCallback, useMemo, useState } from 'react'
import { LuPencil, LuTrash2 } from 'react-icons/lu'

import { columns, movements } from './data'

// const statusColorMap: Record<string, ChipProps['color']> = {
//   active: 'success',
//   paused: 'danger',
//   vacation: 'warning'
// }

type Movement = (typeof movements)[0]

export default function TableMovements() {
  const [page, setPage] = useState(1)
  const rowsPerPage = 4

  const pages = Math.ceil(movements.length / rowsPerPage)

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return movements.slice(start, end)
  }, [page])

  const renderCell = useCallback((movement: Movement, columnKey: Key) => {
    const cellValue = movement[columnKey as keyof Movement]

    switch (columnKey) {
      case 'date':
        return <p>{cellValue}</p>
      case 'description':
        return <p>{cellValue}</p>
      // case 'category':
      //   return (
      //     <Chip
      //       className="capitalize"
      //       color={statusColorMap[user.status]}
      //       size="sm"
      //       variant="flat"
      //     >
      //       {cellValue}
      //     </Chip>
      //   )
      case 'value':
        return <p>{cellValue}</p>
      case 'type':
        return <p>{cellValue}</p>
      case 'actions':
        return (
          <div className="relative flex justify-center items-center gap-5">
            <Tooltip
              content="Editar registro"
              className="bg-orange-600 text-white"
            >
              <span className="text-lg text-orange-600 cursor-pointer active:opacity-50">
                <LuPencil />
              </span>
            </Tooltip>
            <Tooltip
              content="Deletar registro"
              className="bg-red-600 text-white"
            >
              <span className="text-lg text-red-600 cursor-pointer active:opacity-50">
                <LuTrash2 />
              </span>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="sticky left-0 bottom-0 w-full flex justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
            classNames={{
              wrapper: 'bg-background-500',
              prev: 'bg-background-500 text-white',
              item: 'bg-background-500 text-white',
              next: 'bg-background-500 text-white',
              cursor: 'bg-primary-500 shadow-none'
            }}
          />
        </div>
      }
      classNames={{
        wrapper:
          'h-[273px] p-2 bg-background-900 border border-background-500 rounded-xl overflow-y-hidden',
        th: 'min-w-[200px] lg:min-w-0 bg-background-700 text-primary-500 uppercase',
        td: 'min-w-[200px] lg:min-w-0 text-white'
      }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            className={column.uid === 'actions' ? 'text-center' : 'text-start'}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
