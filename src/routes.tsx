import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'

const Routess = () => (
  <Routes>
    {/* path na própria root */}
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    {/* query and path parameter */}
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Routess
