import { GetFoodList } from '../apiClient.ts'

function FoodList() {

  const { data, isError, isPending } = GetFoodList()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }
  

  return (
    <section className='foodlist'>
      <h1>Select an option to see more!</h1>
      {data.map((cuisine) => (
        <div key={cuisine.name}>
          <h3>{cuisine.name}</h3>
          <p>{cuisine.description}</p>
        </div>
      ))}
    </section>
  )
}

export default FoodList