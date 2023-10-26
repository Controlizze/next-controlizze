import { api } from './api'

import { Movement } from 'types/Movement'

export async function getAllMovements() {
  const response = await api.get<Movement[]>('/api/movement/all')

  return response.data
}
