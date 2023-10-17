import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useState } from 'react'

import { setCookie } from 'nookies'
import { loginRequest, registerRequest } from 'services/auth'
import { LoginType, RegisterType, User } from 'types/User'

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  registerUser: (data: RegisterType) => Promise<void>
  loginUser: (data: LoginType) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const isAuthenticated = !!user

  // useEffect(() => {
  //   const { 'nextfinance.token': token } = parseCookies()

  //   if (token) {
  //     recoverUserInformation(token).then((response) => {
  //       console.log(response.user)
  //       setUser(response.user)
  //     })
  //   }
  // }, [])

  async function registerUser({ name, email, password }: RegisterType) {
    try {
      const { user } = await registerRequest({
        name,
        email,
        password
      })

      console.log(user)

      router.push('/login')
    } catch (e) {
      console.log('Falha ao registrar o usuário', e)
    }
  }

  async function loginUser({ email, password }: LoginType) {
    try {
      const { user, token } = await loginRequest({
        email,
        password
      })

      setCookie(undefined, 'nextfinance.token', token, {
        maxAge: 60 * 60 * 2, // 2 hours
        path: '/'
      })

      setUser(user)

      router.push('/movements')
    } catch (e) {
      console.log('Falha ao autenticar o usuário', e)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, registerUser, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
