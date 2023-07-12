import Image from 'next/image'
import {
  FaBars,
  FaCircleArrowDown,
  FaCircleArrowUp,
  FaWallet
} from 'react-icons/fa6'

import { Card } from 'components/Card'
import Container from 'components/Container'

export default function Dashboard() {
  return (
    <Container className="p-4 flex flex-col items-center">
      <header className="w-full h-16 px-6 flex justify-between items-center bg-black-700 rounded-full">
        <Image
          src="/emblema.png"
          width={40}
          height={40}
          priority={true}
          alt="Logo"
        />
        <FaBars className="w-7 h-7 fill-white" />
      </header>
      <div className="flex">
        <Card
          text="Despesas"
          icon={<FaCircleArrowDown className="w-8 h-8 fill-red-800" />}
        />
        <Card
          text="Receitas"
          icon={<FaCircleArrowUp className="w-8 h-8 fill-primary-900" />}
        />
        <Card
          text="Total"
          icon={<FaWallet className="w-8 h-8 fill-orange-800" />}
        />
      </div>
    </Container>
  )
}
