import { Content } from './components/Content'
import Container from 'components/Container'

export const metadata = {
  title: 'Dashboard - Controlizze'
}

export default function Dashboard() {
  return (
    <Container className="flex">
      <div className="w-full h-full p-14 flex flex-col gap-14">
        <div className="w-fit flex flex-col gap-1">
          <span className="text-4xl font-semibold text-white">Dashboard</span>
          <div className="w-3/5 h-1 bg-gradient-to-r from-primary-100 to-primary-900 rounded-full"></div>
        </div>

        <Content />
      </div>
    </Container>
  )
}
