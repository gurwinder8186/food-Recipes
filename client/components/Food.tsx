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
      <h1 className="heading">Select your favourite Cuisines!</h1>
      <section className="home">
        {data.map((cuisine) => (
          <div key={cuisine.name}>
                <img
                  src={`images/${cuisine.name.toLowerCase()}.jpg`}
                  alt={`${cuisine.name} food`}
                  width="200px"
                />
            <h3>
              <Link className="names" to={`/cuisines/${cuisine.id}`}>
                {cuisine.name}{' '}
              </Link>
            </h3>
            <p>{cuisine.description}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Food
