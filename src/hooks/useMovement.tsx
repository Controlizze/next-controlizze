import { useMutation, useQuery, useQueryClient } from 'react-query'

import Cookies from 'js-cookie'
import { api } from 'services/api'
import { MovementRequest } from 'types/Movement'

const user_email = Cookies.get('nextfinance.useremail')
const user_name = Cookies.get('nextfinance.username')

export function useMovement() {
  const queryClient = useQueryClient()

  const {
    data: movements,
    refetch,
    ...rest
  } = useQuery(
    'movements',
    () => {
      return api
        .get(`/movement?user=${user_name}`)
        .then((response) => response.data.content)
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
    },
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries(['movements'])
    }
  })

  return {
    movements,
    mutation,
    ...rest
  }
}
