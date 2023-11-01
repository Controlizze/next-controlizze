import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { api } from 'services/api'
import { LoginType, RegisterType, User } from 'types/User'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  const router = useRouter()

  const isAuthenticated = !!user

  async function register({ name, email, password }: RegisterType) {
    try {
      await api.post('/auth/register', {
        name,
        email,
        password
      })

      router.push('/login')
    } catch (e) {
      console.log('Deu ruim!')
    }
  }

  async function login({ email, password }: LoginType) {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })

      setUser(response.data)

      router.push('/movements')
    } catch (e) {
      console.log('Deu ruim!')
    }
  }

  return {
    user,
    isAuthenticated,
    register,
    login
  }
}
