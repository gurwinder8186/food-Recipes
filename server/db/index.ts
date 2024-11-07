import connection from './connection.ts'
import { Cuisine, Dish, Recipe } from '../../models/food.ts'

export async function getAllFruits(db = connection): Promise<Cuisine[]> {
  return db('fruit').select()
}
