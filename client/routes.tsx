import { createRoutesFromElements, Route } from 'react-router-dom'
// import App from './components/App'
import AllFood from './components/Food'
import Main from './components/Main'
import Recipe from './components/Recipe'
import FoodList from './components/FoodList'

export default createRoutesFromElements(
  <Route path="/" element={<Main />}> 
    <Route index element={<AllFood />} />
    <Route path="cuisines/:id" element={<FoodList />}>
      <Route path=":recipeId" element={<Recipe />} />
    </Route>
  </Route>,
)
