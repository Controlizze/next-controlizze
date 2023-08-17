import { BsChevronRight } from 'react-icons/bs'

import { Content } from './components/Content'
import Container from 'components/Container'

export const metadata = {
  title: 'Dashboard - Controlizze'
}

export default function Dashboard() {
  return (
    <Container className="flex">
      <div className="w-full h-full p-14 flex flex-col gap-14">
        <div className="w-full flex items-center gap-2">
          <BsChevronRight className="w-3 h-3 fill-zinc-500 hidden" />
          <span className="text-4xl font-semibold text-white">Dashboard</span>
        </div>

        <Content />
      </div>
    </Container>
  )
}
