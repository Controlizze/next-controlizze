import { columns } from 'mocks/mocks'

export default function Table() {
  return (
    <div className="min-h-[270px] overflow-x-auto">
      <table className="w-full min-h-[207px] p-0.5 flex flex-col gap-0.5 bg-900 border-2 border-700 rounded shadow-lg shadow-black/25">
        <thead>
          <tr className="w-full h-10 flex gap-0.5">
            {columns.map((col) => (
              <th
                key={col.id}
                className={`w-full h-full px-4 flex ${
                  col.id === 'actions' ? 'justify-center' : 'justify-start'
                } items-center bg-700`}
              >
                <span className="font-semibold text-primary-500 uppercase">
                  {col.name}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="flex flex-col gap-0.5">
          <tr className="h-10 flex gap-0.5">
            <td className="w-full h-full px-4 flex justify-start items-center bg-800">
              <span className="text-white">Conteúdo</span>
            </td>

            <td className="w-full h-full px-4 flex justify-start items-center bg-800">
              <span className="text-white">Conteúdo</span>
            </td>

            <td className="w-full h-full px-4 flex justify-start items-center bg-800">
              <span className="text-white">Conteúdo</span>
            </td>

            <td className="w-full h-full px-4 flex justify-start items-center bg-800">
              <span className="text-white">Conteúdo</span>
            </td>

            <td className="w-full h-full px-4 flex justify-start items-center bg-800">
              <span className="text-white">Conteúdo</span>
            </td>

            <td className="w-full h-full px-4 flex justify-start items-center bg-800">
              <span className="text-white">Conteúdo</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
