import { api } from './api'

import { LoginType, RegisterType } from 'types/User'

const delay = (amount = 800) =>
  new Promise((resolve) => setTimeout(resolve, amount))

export async function registerRequest({ name, email, password }: RegisterType) {
  await delay()

  await api.post('/auth/register', {
    name,
    email,
    password
  })

  return {
    user: {
      name,
      email
    }
  }
}

export async function loginRequest({ email, password }: LoginType) {
  await delay()

  const response = await api.post('/auth/login', {
    email,
    password
  })

  const token = response.data.jwt

  return {
    user: {
      email,
      password
    },
    token: token
  }
}

export async function recoverUserInformation(token: string) {
  await delay()

  const response = await api.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}
