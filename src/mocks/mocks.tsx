import {
  LuArrowDownCircle,
  LuArrowUpCircle,
  LuDollarSign,
  LuLayoutDashboard,
  LuUser,
  LuWallet
} from 'react-icons/lu'

export const links = [
  {
    id: 1,
    title: 'Dashboard',
    links: [
      {
        id: 1,
        icon: <LuLayoutDashboard />,
        name: 'Movimentações',
        path: '/dashboard/movements'
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
        path: '/others/investment'
      },
      {
        id: 2,
        icon: <LuUser />,
        name: 'Perfil do usuário',
        path: '/others/profile'
      }
    ]
  }
]

export const cards = [
  {
    id: 1,
    title: 'Despesas',
    gradient: 'red',
    icon: LuArrowDownCircle,
    iconColor: 'red',
    value: '0.00'
  },
  {
    id: 2,
    title: 'Receitas',
    gradient: 'green',
    icon: LuArrowUpCircle,
    iconColor: 'green',
    value: '0.00'
  },
  {
    id: 3,
    title: 'Saldo',
    gradient: 'orange',
    icon: LuWallet,
    iconColor: 'orange',
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
  }
]

export const banks = [
  {
    url: 'https://www.bb.com.br',
    bg: 'bg-yellow-400',
    img: '/banks/bank1.png'
  },
  {
    url: 'https://www.santander.com.br',
    bg: 'bg-red-600',
    img: '/banks/bank2.png'
  },
  {
    url: 'https://www.c6bank.com.br',
    bg: 'bg-black',
    img: '/banks/bank3.png'
  },
  {
    url: 'https://www.inter.co',
    bg: 'bg-orange-500',
    img: '/banks/bank4.png'
  },
  {
    url: 'https://www.nubank.com.br',
    bg: 'bg-purple-600',
    img: '/banks/bank5.png'
  },
  {
    url: 'https://www.sicoob.com.br',
    bg: 'bg-teal-950',
    img: '/banks/bank6.png'
  },
  {
    url: 'https://www.next.me',
    bg: 'bg-white',
    img: '/banks/bank7.png'
  }
]

export const brokers = [
  {
    url: 'https://www.rico.com.vc',
    bg: 'bg-indigo-950',
    img: '/brokers/broker1.png'
  },
  {
    url: 'https://www.btgpactual.com',
    bg: 'bg-white',
    img: '/brokers/broker2.png'
  },
  {
    url: 'https://www.cmcapital.com.br',
    bg: 'bg-blue-600',
    img: '/brokers/broker3.png'
  },
  {
    url: 'https://www.toroinvestimentos.com.br',
    bg: 'bg-white',
    img: '/brokers/broker4.png'
  },
  {
    url: 'https://www.xpi.com.br',
    bg: 'bg-black',
    img: '/brokers/broker5.png'
  },
  {
    url: 'https://corretora.clear.com.br',
    bg: 'bg-blue-800',
    img: '/brokers/broker6.png'
  },
  {
    url: 'https://www.avenue.us',
    bg: 'bg-white',
    img: '/brokers/broker7.png'
  }
]
