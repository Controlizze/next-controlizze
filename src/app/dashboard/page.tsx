import { BsList } from 'react-icons/bs'

import Container from 'components/Container'
import { Icon } from 'components/Icon'

export const metadata = {
  title: 'Dashboard - Controlizze'
}

export default function Dashboard() {
  return (
    <Container className="flex">
      <div className="w-full h-full p-8 xl:p-14 flex flex-col gap-14">
        <div className="flex items-center gap-3">
          <button className="p-1 bg-primary-500 hover:opacity-75 rounded-full">
            <Icon icon={BsList} />
          </button>

          <div className="w-fit flex flex-col">
            <span className="text-xl xl:text-4xl font-semibold text-white">
              Dashboard
            </span>
            <div className="w-3/5 h-1 bg-gradient-to-r from-primary-100 to-primary-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}
