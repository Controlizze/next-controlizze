// export type ContentProps = ComponentProps<'div'>

import { BsArrowDownCircle, BsArrowUpCircle, BsWallet } from 'react-icons/bs'

import { Card } from 'components/Card'
import { Icon } from 'components/Icon'

export function Content() {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="w-full flex justify-between gap-10">
        <Card>
          <div className="w-full flex justify-between items-center">
            <span className="text-4xl font-medium text-white">Despesas</span>
            <Icon icon={BsArrowDownCircle} size="xl" fill="red" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-5xl font-bold text-white">R$0.00</span>
          </div>
        </Card>

        <Card>
          <div className="w-full flex justify-between items-center">
            <span className="text-4xl font-medium text-white">Receitas</span>
            <Icon icon={BsArrowUpCircle} size="xl" fill="green" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-5xl font-bold text-white">R$0.00</span>
          </div>
        </Card>

        <Card>
          <div className="w-full flex justify-between items-center">
            <span className="text-4xl font-medium text-white">Saldo</span>
            <Icon icon={BsWallet} size="xl" fill="orange" />
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-5xl font-bold text-white">R$0.00</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
