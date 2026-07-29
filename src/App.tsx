import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'

import { GlobalCss } from './styles'

import Routess from './routes'

function App() {
  return (
    <BrowserRouter>
      {/* /\ Para usar o React Router DOM em toda aplicação */}
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Routess />
    </BrowserRouter>
  )
}

export default App
