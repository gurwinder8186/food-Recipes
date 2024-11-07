// HERE WILL BE THE FIRST HOME PAGE
import { GetCuisines } from '../apiClient'
import AllFood from './Food'

export default function Main() {
  const { isError, isPending } = GetCuisines()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }
  return (
    <>
    <AllFood />
    </>
  )
}
