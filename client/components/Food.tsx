import { getAllCuisines } from '../../server/db/index.ts'
import { useQuery } from '@tanstack/react-query'
import { Cuisine } from '../../models/food.ts'

function Food() {
  const {
    data: Cuisines,
    isPending,
    isError,
  } = useQuery<Cuisine[]>({
    queryKey: ['Cuisines'],
    queryFn: getAllCuisines,
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }

  return (
    <div>
      {Cuisines?.map((cuisine) => (
        <div key={cuisine.name}>
          <h3>{cuisine.name}</h3>
          <p>{cuisine.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Food
