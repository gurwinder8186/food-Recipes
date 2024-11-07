import { GetRecipe } from "../apiClient"

function Recipe() {

  const { data, isError, isPending } = GetRecipe()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }
  

  return (
    <div>
      <h1>Select your favourite food!</h1>
      
    </div>
  )
}

export default Recipe