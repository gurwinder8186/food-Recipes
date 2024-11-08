import { Link } from 'react-router-dom'
import { useCuisines } from '../apiClient.ts'

function Food() {
  const { data, isError, isPending } = useCuisines()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }

  return (
    <>
      <h1 className="heading">Select your favourite Cuisines!</h1>
      <section className="home">
        {data.map((cuisine) => (
          <div key={cuisine.name}>
            <h3>
              <Link className="names" to={`/cuisines/${cuisine.id}`}>
                {cuisine.name}{' '}
                <img
                  src={`images/${cuisine.name.toLowerCase()}.jpg`}
                  alt={`${cuisine.name} food`}
                  width="200px"
                />
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
