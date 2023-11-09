import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { api } from 'services/api'
import { LoginType, RegisterType, User } from 'types/User'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  const router = useRouter()

  const isAuthenticated = !!user

  async function registerUser({ name, email, password }: RegisterType) {
    try {
      await api.post('/auth/register', {
        name,
        email,
        password
      })

      router.push('/login')
    } catch (e) {
      console.error('Falha ao cadastrar usuário!', e)
    }
  }

  async function loginUser({ email, password }: LoginType) {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })

      const token = response.data.token
      const user = response.data.user

      if (user) {
        setUser(user)
      }

      setCookie(undefined, 'nextfinance.token', token, {
        maxAge: 60 * 60 * 2, // 2 hours
        path: '/'
      })

      router.push('/movements')
    } catch (e) {
      console.error('Falha ao logar usuário!', e)
    }
  }

  function logout() {
    const { ['nextfinance.token']: token } = parseCookies()
    try {
      if (token) {
        destroyCookie(undefined, 'nextfinance.token')
        setUser(null)
      }
    } catch (e) {
      console.error('Falha ao deslogar usuário!', e)
    }
  }

  return {
    user,
    isAuthenticated,
    registerUser,
    loginUser,
    logout
  }
}
