import { createRoutesFromElements, Route } from 'react-router-dom'
// import App from './components/App'
import Food from './components/Food'
import Main from './components/Main'

export default createRoutesFromElements(
  <Route path="/" element={<Main />}>
    <Route path="/:id" element={<Food />} />
    <Route path="/:id/:id" element={<Recipe />} />
  </Route>,
)
