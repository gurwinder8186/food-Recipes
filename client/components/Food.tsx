import { useQuery } from '@tanstack/react-query'
import { Cuisine } from '../../models/food.ts'
import { GetCuisines } from '../apiClient.ts'

function Food() {

  const { data, isError, isPending } = GetCuisines()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }
  

  return (
    <div>
      <h1>Select your favourite food!</h1>
      {data.map((cuisine) => (
        <div key={cuisine.name}>
          <h3>{cuisine.name}</h3>
          <p>{cuisine.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Food
