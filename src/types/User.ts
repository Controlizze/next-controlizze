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
  city: string | null
  authorities: Array<{ id: number; authority: string }>
  enabled: boolean
  accountNonExpired: boolean
  credentialsNonExpired: boolean
  accountNonLocked: boolean
  username: string
}
