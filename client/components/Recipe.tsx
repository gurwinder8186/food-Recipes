import { useParams } from "react-router-dom"
import { GetRecipe } from "../apiClient"

function Recipe() {
  
  const { id, recipeId } = useParams()
  const { data, isError, isPending } = GetRecipe(id, recipeId)

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }
  

  return (
    <div>
      <h1>{data.name}</h1>
      
    </div>
  )
}

export default Recipe