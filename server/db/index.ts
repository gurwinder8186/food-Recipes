import connection from './connection.ts'
import { Cuisine, Dish, Recipe } from '../../models/food.ts'

export async function getAllCuisines(): Promise<Cuisine[]> {
  return await connection('cuisines').select()
}

export async function getAllFoodLists(id: number): Promise<Dish[]> {
  return await connection('foodList').join('recipes', 'recipes.id', 'foodList.id').where('cuisines_id', id).select()
}

export async function getRecipe(id: number): Promise<Recipe[]> {
  return await connection('recipes').where('foodList_id', id).select()
}

export async function deleteRecipe(name: string): Promise<Recipe[]>{
  return await connection('recipes').where('name', name).delete();
}
export async function addRecipe(foodList:number, name:string, ingredients:string, instructions:string ): Promise<Recipe[]>{
  return await connection('recipes').insert({
    foodList_id: foodList,  
    name:name,
    ingredients: ingredients,
    instructions: instructions,
})
}