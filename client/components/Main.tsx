
// HERE WILL BE THE FIRST HOME PAGE
import { Outlet } from 'react-router-dom'
import RecipeSearch from './SearchBar'

export default function Main() {
  return (
    <>
      <RecipeSearch />
      <Outlet />
    </>
  )
}
