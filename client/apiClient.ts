import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Cuisine, Dish, Recipe } from '../models/food'

export function useCuisines() {
  return useQuery({
    queryKey: ['cuisines'],
    queryFn: async () => {
      const res = await request.get('/api/v1/cuisines')
      return res.body as Cuisine[]
    },
  })
}

export function useFoodList(id: string) {
  return useQuery({
    queryKey: ['foodList', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/cuisines/${id}`)

      return res.body as Dish[]
    },
  })
}

export function useRecipe(
{id, recipeId}: {id: string, recipeId: string }
) {

  return useQuery({
    queryKey: ['recipes', recipeId],
    queryFn: async () => {
      const res = await request.get(`/api/v1/cuisines/${id}/${recipeId}`)
      return res.body as Recipe[]
    },
  })
}
