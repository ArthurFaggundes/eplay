import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Home'

const Routess = () => (
  <Routes>
    {/* path na própria root */}
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Routess
