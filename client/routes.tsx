import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Food from './components/Food'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/:id/" element={<Food />} />
  </Route>,
)
