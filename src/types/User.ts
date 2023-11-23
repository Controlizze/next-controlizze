export type RegisterType = {
  name: string
  email: string
  password: string
}

export type LoginType = {
  email: string
  password: string
}

export type User = {
  id: number
  name: string
  email: string
  password: string
  city?: string
}

export type UserRequest = {
  name: string
  email: string
  date_birth?: string
  cel?: number
  city?: number
  state?: number
}
