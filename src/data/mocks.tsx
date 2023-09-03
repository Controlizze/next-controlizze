import { LuDollarSign, LuLayoutDashboard, LuUser } from 'react-icons/lu'

export const links = [
  {
    id: 1,
    title: 'Dashboard',
    links: [
      {
        id: 1,
        icon: <LuLayoutDashboard />,
        name: 'Movimentações',
        path: 'moviments'
      }
    ]
  },
  {
    id: 2,
    title: 'Outros',
    links: [
      {
        id: 1,
        icon: <LuDollarSign />,
        name: 'Investimento',
        path: 'investment'
      },
      {
        id: 2,
        icon: <LuUser />,
        name: 'Perfil do usuário',
        path: 'profileuser'
      }
    ]
  }
]

export const cards = [
  {
    id: 1,
    value: '0.00'
  },
  {
    id: 2,
    value: '0.00'
  },
  {
    id: 3,
    value: 0
  }
]
