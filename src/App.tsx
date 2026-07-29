import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Banner from './components/Banner'

import { GlobalCss } from './styles'
import ProductsList from './components/ProductList'

const routes = createBrowserRouter([
  {
    path: '/', // path na própria root
    element: (
      <>
        <Banner />
        <ProductsList title="Offers" background="grey" />
        <ProductsList title="Comming soon" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
