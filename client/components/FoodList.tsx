import { useParams } from 'react-router-dom'
import { GetFoodList } from '../apiClient.ts'

function FoodList() {

  const { id } = useParams()
  const { data, isError, isPending } = GetFoodList(id)

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }

  return (
    <section className='foodlist'>
      <h1>Select an option to see more!</h1>
      {data.map((food) => (
        <div key={food.name}>
          <h3>{food.name}</h3>
          <p>{food.description}</p>
        </div>
      ))}
    </section>
  )
}

export default FoodList