import { useParams } from 'react-router-dom' // usado para alterar parâmetros na rota

import { useGetGameQuery } from '../../services/api'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

type GameParams = {
  id: string // Casting para nullable-case (para o React todo ID é string)
}

const Product = () => {
  const { id } = useParams() as GameParams // ao invéz de por teste.id da para só por {id}
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="About the game" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Read More" background="grey">
        <p>
          <b>Plataform:</b> {game.details.system} <br />
          <b>Developer:</b> {game.details.developer} <br />
          <b>Publisher:</b> {game.details.publisher} <br />
          <b>Languages:</b> The game offers suport to the following languages:{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
