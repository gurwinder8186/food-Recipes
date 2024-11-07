import { Link, useParams } from 'react-router-dom'
import { useFoodList } from '../apiClient'
import { useQuery } from '@tanstack/react-query'
// import LoadingSpinner from './Loading'
import { useState } from 'react'

export default function RecipeSearch() {
  const [name, setName] = useState('')
  // const { data, isError, error } = useQuery({
  //   queryKey: ['recipe', 'all'],
  //   queryFn: GetFoodList,
  // })
  const { id } = useParams()

  const cuisineId = id as string
  console.log(cuisineId)

  const { data, isLoading, isError, error } = useFoodList(2)
  if (isError) {
    return <p>Oops! {String(error)}</p>
  }
  if (data)
    if (isLoading) {
      return <p>loading</p>
    }
  console.log('searchbar', data)
  // const searchResults = data?.filter((cuisine) => {
  //   return cuisine.name?.toLowerCase().includes(name.toLowerCase())
  // })

  return (
    <div>
      <h1>Search Recipes by Name:</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
      <ul>
        {/* {searchResults?.map((cuisine, idx) => (
          <li key={idx}>
            <Link to={`/cuisine/${cuisine.id}`}>{cuisine.name}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  )
}
