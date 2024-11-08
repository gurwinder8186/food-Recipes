export interface Cuisine {
  id: number | string
  name: string
  description: string
}

export interface Recipe {
  foodList_id: number
  name: string
  ingredients: string
  instructions: string
}
export interface Dish extends Recipe {
  name: string
  description: string
  cuisines_id: number | string
}
