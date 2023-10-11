import { useQuery } from 'react-query'

import axios, { AxiosResponse } from 'axios'
import { Movement } from 'types/Movement'

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

const fetchData = async (): Promise<AxiosResponse<Movement[]>> => {
  const response = await instance.get<Movement[]>('/movement')

  return response
}

export default function useMovements() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['movement-data'],
    retry: false
  })

  return {
    ...query,
    data: query.data?.data
  }
}
