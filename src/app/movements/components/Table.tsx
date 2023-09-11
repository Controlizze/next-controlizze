import { columns, records } from 'data/mocks'

// type Record = (typeof records)[0]

export function Table() {
  // const renderCell = useCallback((record: Record, columnKey: Key) => {
  //   const cellValue = record[columnKey as keyof Record]

  //   switch (columnKey) {
  //     case 'date':
  //       return <div className="flex items-center">{record.date}</div>
  //     case 'description':
  //       return <div className="flex items-center">{record.description}</div>
  //     case 'category':
  //       return <div className="flex items-center">{record.category}</div>
  //     case 'value':
  //       return <div className="flex items-center">{record.value}</div>
  //     case 'type':
  //       return <div className="flex items-center">{record.type}</div>
  //     case 'actions':
  //       return (
  //         <div className="w-full h-full flex justify-center items-center gap-2">
  //           <button className="w-6 h-6 flex justify-center items-center bg-orange-700 rounded">
  //             <LuPencil className="text-xs text-white" />
  //           </button>

  //           <button className="w-6 h-6 flex justify-center items-center bg-red-700 rounded">
  //             <LuTrash className="text-xs text-white" />
  //           </button>
  //         </div>
  //       )
  //     default:
  //       return cellValue
  //   }
  // }, [])

  return (
    <table className="h-[206px] flex flex-col bg-background-900 overflow-x-scroll rounded">
      <thead className="w-fit h-10">
        <tr className="w-fit h-full flex gap-0.5">
          {columns.map((column) => (
            <th
              key={column.id}
              className="w-[200px] h-full px-4 flex items-center bg-background-500 text-lg font-semibold text-primary-500"
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="w-fit h-10">
        {records.map((record) => (
          <tr key={record.id} className="h-full flex gap-0.5 bg-red-300">
            asd
          </tr>
        ))}
      </tbody>
    </table>
  )
}
