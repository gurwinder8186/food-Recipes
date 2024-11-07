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

export default router
