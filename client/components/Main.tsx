
// HERE WILL BE THE FIRST HOME PAGE
import { Outlet } from 'react-router-dom'
import RecipeSearch from './SearchBar'
import Nav from './Nav'

export default function Main() {
  return (
    <>
      <Nav />
      {/* <RecipeSearch /> */}
      <Outlet />
    </>
  )
}
