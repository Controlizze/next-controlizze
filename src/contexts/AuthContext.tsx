'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useState } from 'react'

import { destroyCookie } from 'nookies'
import { api } from 'services/api'
import { LoginType, RegisterType, User } from 'types/User'

type AuthContextProps = {
  user: User | null
  isAuthenticated: boolean
  register: (data: RegisterType) => Promise<void>
  login: (data: LoginType) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  console.log(user)
  const router = useRouter()

  const isAuthenticated = !!user

  const register = async ({ name, email, password }: RegisterType) => {
    const response = await api.post('/auth/register', {
      name,
      email,
      password
    })

    if (response.status === 200) {
      return router.push('/login')
    } else {
      return console.error('Falha ao cadastrar usuário!')
    }
  }

  const login = async ({ email, password }: LoginType) => {
    setUser({
      id: 1,
      name: 'Richard',
      email,
      password,
      city: ''
    })
    // const response = await api.post('/auth/login', {
    //   email,
    //   password
    // })
    // if (response.status === 200) {
    //   const token = response.data.token
    //   const user = response.data.user
    //   if (user && token) {
    //     setUser(user)
    //     setCookie(undefined, 'nextfinance.token', token, {
    //       maxAge: 60 * 60 * 2, // 2 hour
    //       path: '/'
    //     })
    //   }
    //   return router.push('/movements')
    // } else {
    //   return console.error('Falha ao logar usuário!')
    // }
  }

  const logout = () => {
    if (user) {
      destroyCookie(undefined, 'nextfinance.token')
      setUser(null)
    } else {
      return console.error('Falha ao deslogar usuário!')
    }

    return router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
