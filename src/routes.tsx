import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

const Routess = () => (
  <Routes>
    {/* path na própria root */}
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    {/* query and path parameter */}
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Routess
