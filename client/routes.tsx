import { createRoutesFromElements, Route } from 'react-router-dom'
// import App from './components/App'
import Food from './components/Food'
import Main from './components/Main'
import Recipe from './components/Recipe'

export default createRoutesFromElements(
  <Route path="/" element={<Main />}>
    <Route path="/cuisines/:id" element={<Food />} />
    <Route path="/cusines/:id/:id" element={<Recipe />} />
  </Route>,
)
