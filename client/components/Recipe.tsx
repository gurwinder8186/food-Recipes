import { useParams } from 'react-router-dom'
import { useRecipe } from '../apiClient'
import ErrorMessage from './ErrorMessage'
import Loading from './Loading'

function Recipe() {
  const { id, recipeId } = useParams()
  const cuisineId = id as string
  const recId = recipeId as string
  const { data, isError, isPending } = useRecipe({id: cuisineId, recipeId: recId})

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <ErrorMessage />
  }
  
  if(data) {
  //   console.log('recipe', data)
  
  return (
    <section className="recipe">
      {data.map((food) => (
        <div key={food.name}>
          <h3>{food.name}</h3>
          <p>{food.ingredients}</p>
          <p>{food.instructions}</p>
        </div>
      ))}
    </section>
   )
  }
}

export default Recipe
