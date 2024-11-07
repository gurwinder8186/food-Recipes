import { createRoutesFromElements, Route } from 'react-router-dom'
// import App from './components/App'
import Food from './components/Food'
import Main from './components/Main'
import Recipe from './components/Recipe'
import FoodList from './components/FoodList'

export default createRoutesFromElements(
  <Route path="/" element={<Main />}>
    <Route path="cuisines/:id" element={<FoodList />} />
    <Route path="cuisines/:id/:recipeId" element={<Recipe />} />
  </Route>,
)
