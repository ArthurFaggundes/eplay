import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Header from './components/Header'
import Routess from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      {/* /\ Para usar o React Router DOM em toda aplicação */}
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Routess />
      <Footer />
    </BrowserRouter>
  )
}

export default App
