import { LuArrowDownCircle, LuArrowUpCircle, LuWallet } from 'react-icons/lu'

type Props = {
  fill: string
}

export function Icon({ fill }: Props) {
  switch (fill) {
    case 'red':
      return <LuArrowDownCircle className="text-3xl text-red-700" />
    case 'green':
      return <LuArrowUpCircle className="text-3xl text-green-700" />
    case 'orange':
      return <LuWallet className="text-3xl text-orange-700" />
    default:
      return <LuArrowDownCircle className="text-3xl text-red-700" />
  }
}
