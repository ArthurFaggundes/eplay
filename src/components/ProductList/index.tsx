import Game from '../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            infos={game.infos}
            image={game.image}
            description={game.description}
            category={game.category}
            system={game.system}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
