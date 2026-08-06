import { useParams } from 'react-router-dom' // usado para alterar parâmetros na rota
import Hero from '../../components/Hero'

const Product = () => {
  const { id } = useParams() // ao invéz de por teste.id da para só por {id}

  return (
    <>
      <Hero />
    </>
  )
}

export default Product
