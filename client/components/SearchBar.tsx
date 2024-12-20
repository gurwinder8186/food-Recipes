import { Link, useParams } from 'react-router-dom'
import { useFoodList } from '../apiClient'
import { useQuery } from '@tanstack/react-query'
// import LoadingSpinner from './Loading'
import { useState } from 'react'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

export default function RecipeSearch() {
  const [name, setName] = useState('')
  // const { data, isError, error } = useQuery({
  //   queryKey: ['recipe', 'all'],
  //   queryFn: GetFoodList,
  // })
  const { id } = useParams()

  const cuisineId = id as string
  console.log(cuisineId)

  const { data, isLoading, isError } = useFoodList(id)
  if (isError) {
    return <ErrorMessage />
  }
  if (data)
    if (isLoading) {
      return <Loading />
    }
  console.log('searchbar', data)
  const searchResults = data?.filter((cuisine) => {
    return cuisine.name?.toLowerCase().includes(name.toLowerCase())
  })

  return (
    <div className="searchBar">
      <h3>Search Recipes </h3>
      <form>
        <label htmlFor="name">: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
      <ul>
        {searchResults?.map((cuisine, idx) => (
          <li key={idx}>
            <Link
              className="words"
              to={`/cuisines/${cuisine.cuisines_id}/${cuisine.foodList_id}`}
            >
              {cuisine.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
