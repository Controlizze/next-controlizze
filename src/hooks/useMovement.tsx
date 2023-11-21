import { useMutation, useQuery } from 'react-query'

import Cookies from 'js-cookie'
import { api } from 'services/api'
import { MovementRequest } from 'types/Movement'

const user_email = Cookies.get('nextfinance.useremail')

export function useMovement() {
  const { data: movements, ...rest } = useQuery(
    'movements',
    () => {
      return api.get('/movement/all').then((response) => response.data)
    },
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )

  const mutation = useMutation({
    mutationFn: ({
      date,
      description,
      category,
      value,
      type
    }: MovementRequest) => {
      return api
        .post('/movement/add', {
          date,
          description,
          category,
          value,
          type,
          user_email
        })
        .then((response) => {
          return response.data
        })
    }
  })

  return {
    movements,
    mutation,
    ...rest
  }
}
