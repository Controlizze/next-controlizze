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
        path: 'movements'
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
        path: 'uder-profile'
      }
    ]
  }
]

export const cards = [
  {
    id: 1,
    title: 'Despesas',
    gradientColor: 'red',
    icon: 'red',
    value: '0.00'
  },
  {
    id: 2,
    title: 'Receitas',
    gradientColor: 'green',
    icon: 'green',
    value: '0.00'
  },
  {
    id: 3,
    title: 'Saldo',
    gradientColor: 'orange',
    icon: 'orange',
    value: '0.00'
  }
]

export const columns = [
  {
    id: 'date',
    name: 'Data'
  },
  {
    id: 'description',
    name: 'Descrição'
  },
  {
    id: 'category',
    name: 'Categoria'
  },
  {
    id: 'value',
    name: 'Valor (R$)'
  },
  {
    id: 'type',
    name: 'Tipo'
  },
  {
    id: 'actions',
    name: 'Ações'
  }
]

export const records = [
  {
    id: 1,
    date: '03/09/2023',
    description: 'Presente de aniversário',
    category: 'Presente',
    value: 200,
    type: 'Receita'
  },
  {
    id: 2,
    date: '04/09/2023',
    description: 'Perfume',
    category: 'Pessoal',
    value: 110,
    type: 'Despesa'
  }
]
