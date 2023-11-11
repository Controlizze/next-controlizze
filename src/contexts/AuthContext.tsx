'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useState } from 'react'

import Cookies from 'js-cookie'
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
  const router = useRouter()

  const isAuthenticated = !!user

  const register = async ({ name, email, password }: RegisterType) => {
    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password
      })

      if (response.status === 200) {
        router.push('/login')
      }
    } catch (e) {
      console.log('Falha ao registrar usuário!', e)
    }
  }

  const login = async ({ email, password }: LoginType) => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })

      if (response.status === 200) {
        const token = response.data.token
        const user = response.data.user
        if (user && token) {
          setUser(user)
          Cookies.set('nextfinance.token', token, { expires: 1 })
        }
      }

      router.push('/movements')
    } catch (e) {
      console.error('Falha ao logar usuário!', e)
    }
  }

  const logout = () => {
    try {
      Cookies.remove('nextfinance.token')
      setUser(null)

      router.push('/')
    } catch (e) {
      console.error('Falha ao deslogar usuário!', e)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
