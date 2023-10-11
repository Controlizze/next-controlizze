export type Movement = {
  id: string
  date: string
  description: string
  category: number
  value: number
  type: number
  user: number
}

export type MovementResponse = {
  data: Movement[]
}
