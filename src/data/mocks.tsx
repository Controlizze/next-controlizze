import { LuDollarSign, LuLayoutDashboard, LuUser } from 'react-icons/lu'

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        icon: <LuLayoutDashboard />,
        name: 'Movimentações',
        path: 'moviments'
      }
    ]
  },
  {
    title: 'Outros',
    links: [
      {
        icon: <LuDollarSign />,
        name: 'Investimento',
        path: 'investment'
      },
      {
        icon: <LuUser />,
        name: 'Perfil do usuário',
        path: 'profileuser'
      }
    ]
  }
]
