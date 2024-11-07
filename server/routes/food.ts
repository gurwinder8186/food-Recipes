import { Router } from 'express'
import * as db from '../db/index.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const cuisines = await db.getAllCuisines()
    res.json(cuisines)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const foodList = await db.getAllFoodLists(id)
    res.json(foodList)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const recipe = await db.getRecipe(id)
    res.json(recipe)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
router.delete('/:id/:name', async (req, res) => {
  try {
    const name = String(req.params.name)
    const recipe = await db.deleteRecipe(name)
    res.json(recipe)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


export default router
