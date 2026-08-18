import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import { store } from './store'

import Header from './components/Header'
import Routess from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* ⇑ Para usar o React Router DOM em toda aplicação */}
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Routess />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
