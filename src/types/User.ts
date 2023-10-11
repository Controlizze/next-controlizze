export type RegisterUser = {
  id: string
  name: string
  email: string
  password: string
}

export type RegisterUserResponse = {
  data: RegisterUser[]
}
