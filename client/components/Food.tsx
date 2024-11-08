import { Link } from 'react-router-dom'
import { useCuisines } from '../apiClient.ts'
import Loading from './Loading.tsx'
import ErrorMessage from './ErrorMessage.tsx'

function Food() {
  const { data, isError, isPending } = useCuisines()

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <ErrorMessage />
  }

  return (
    <>
      <section className="home">
        <h1>Select your favourite food!</h1>
        {data.map((cuisine) => (
          <div key={cuisine.name}>
            <h3>
              <Link to={`/cuisines/${cuisine.id}`}>{cuisine.name}</Link>
            </h3>
            <p>{cuisine.description}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Food
