import { Outlet, useParams, Link } from 'react-router-dom'
import { useFoodList } from '../apiClient.ts'
import Loading from './Loading.tsx'
import ErrorMessage from './ErrorMessage.tsx'
import RecipeSearch from './SearchBar.tsx'

function FoodList() {
  const { id } = useParams()
  const { data, isError, isPending } = useFoodList(id)

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <ErrorMessage />
  }

  if (data) {
    console.log('foodlist', data)
    return (
      <>
      <RecipeSearch />
        <section className="foodlist">
          <h1>Select an option to see more!</h1>
          {data.map((food) => (
            <div key={food.name}>
              <Link to={`/cuisines/${food.cuisines_id}/${food.foodList_id}`}>
                <h3>{food.name}</h3>
                <img
                  src={`/images/${food.name.toLowerCase()}.jpg`}
                  alt={`${food.name} food`}
                  width="200px"
                />
              </Link>
              <p>{food.description}</p>
            </div>
          ))}
        </section>
        <Outlet />
      </>
    )
  }
}



export default FoodList

