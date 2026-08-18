import { Game } from '../../pages/Home'

import Product from '../Product'
import { formatPrice } from '../../utils'

import { Container, List } from './styles'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ id, title, background, games, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games && //* já que é opcional precisa de confirmação
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  title={game.name}
                  infos={getGameTags(game)}
                  image={game.media.thumbnail}
                  description={game.description}
                  category={game.details.category}
                  system={game.details.system}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
