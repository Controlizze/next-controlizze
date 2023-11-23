import { useMutation, useQuery, useQueryClient } from 'react-query'

import Cookies from 'js-cookie'
import { api } from 'services/api'
import { MovementRequest } from 'types/Movement'

export function useMovement() {
  const queryClient = useQueryClient()

  const user = Number(Cookies.get('nextfinance.userid'))
  const user_name = Cookies.get('nextfinance.username')
  const token = Cookies.get('nextfinance.token')

  const {
    data: movements,
    refetch,
    ...rest
  } = useQuery(
    'movements',
    () => {
      return api
        .get(`/movement?user=${user_name}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => response.data.content)
    },
    {
      retry: false,
      refetchOnWindowFocus: false
    }
  )

  const add = useMutation({
    mutationFn: ({
      date,
      description,
      category,
      value,
      type
    }: MovementRequest) => {
      return api
        .post(
          '/movement/add',
          {
            date,
            description,
            category,
            value,
            type,
            user
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then((response) => {
          return response.data
        })
    },
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries(['movements'])
    }
  })

  const update = useMutation({
    mutationFn: ({
      id,
      date,
      description,
      category,
      value,
      type
    }: MovementRequest) => {
      return api
        .put(
          `/movement/update/${id}`,
          {
            date,
            description,
            category,
            value,
            type,
            user
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then((response) => {
          return response.data
        })
    },
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries(['movements'])
    }
  })

  const exclude = useMutation({
    mutationFn: (id: number) => {
      return api.delete(`/movement/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
    },
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries(['movements'])
    }
  })

  return {
    movements,
    add,
    update,
    exclude,
    ...rest
  }
}
