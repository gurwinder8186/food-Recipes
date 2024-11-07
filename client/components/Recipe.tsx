import { useParams } from 'react-router-dom'
import { useRecipe } from '../apiClient'

function Recipe() {
  const { id, recipeId } = useParams()
  const cuisineId = id as string
  const recId = recipeId as string
  const { data, isError, isPending } = useRecipe({id: cuisineId, recipeId: recId})

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }

  return (
    <section className="recipe">
      <h1>{data.name}</h1>
      <p>TESTING</p>
    </section>
  )
}

export default Recipe
