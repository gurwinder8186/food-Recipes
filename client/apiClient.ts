import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Cuisine, Dish, Recipe } from '../models/food'

export function GetCuisines() {
  return useQuery({
    queryKey: ['cuisines'],
    queryFn: async () => {
      const res = await request.get('/api/v1/cuisines')
      return res.body as Cuisine[]
    },
  })
}

export function GetFoodList(id: string | undefined) {
  return useQuery({
    queryKey: ['foodList', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/cuisines/${id}`)

      return res.body as Dish[]
    },
  })
}

export function GetRecipe(id: string | undefined) {
  return useQuery({
    queryKey: ['recipes', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/cuisines/${id}/${id}`)
      return res.body as Recipe[]
    },
  })
}
