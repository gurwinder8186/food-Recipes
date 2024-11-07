export interface Cuisine {
  id: number | string
  name: string
  description: string
}

export interface Dish {
  name: string
  description: string
  cuisines_id: number
}
export interface Recipe {
  foodList_id: number
  name: string
  ingredients: string
  instructions: string
}
