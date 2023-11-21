'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, createContext } from 'react'

import Cookies from 'js-cookie'
import { api } from 'services/api'
import { LoginType, RegisterType } from 'types/User'

type AuthContextProps = {
  isAuthenticated: boolean
  registerUser: (data: RegisterType) => Promise<void>
  loginUser: (data: LoginType) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()

  const token = Cookies.get('nextfinance.token')

  const isAuthenticated = !!token

  const registerUser = async ({ name, email, password }: RegisterType) => {
    try {
      await api.post('/auth/register', {
        name,
        email,
        password
      })

      router.push('/login')
    } catch (e) {
      console.log('Falha ao registrar usuário!', e)
    }
  }

  const loginUser = async ({ email, password }: LoginType) => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })

      if (response.status === 200) {
        const token = response.data.token
        const userName = response.data.name
        const userEmail = response.data.email
        if (userName && userEmail && token) {
          Cookies.set('nextfinance.username', userName, { expires: 1 })
          Cookies.set('nextfinance.useremail', userEmail, { expires: 1 })
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
      Cookies.remove('nextfinance.useremail')
      Cookies.remove('nextfinance.username')

      router.push('/')
    } catch (e) {
      console.error('Falha ao deslogar usuário!', e)
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, registerUser, loginUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
