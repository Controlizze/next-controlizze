export type Movement = {
  id: number
  date: string
  description: string
  category: string
  value: number
  type: string
  [key: string]: any
}

export type MovementRequest = {
  date: string
  description: string
  category: number
  value: number
  type: number
}
