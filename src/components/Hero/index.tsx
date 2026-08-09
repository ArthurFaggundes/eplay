import { Banner, Infos } from './styles'
import { Game } from '../../pages/Home'
import { formatPrice } from '../ProductList'

import Button from '../Button'
import Tag from '../Tag'

type Props = {
  //* para pegar as informações de cada jogo
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>

      <Infos>
        <h2>{game.name}</h2>
        <p>
          {/* //? Se existir ele retorna >> */}
          {game.prices.discount && <s>For {formatPrice(game.prices.old)}</s>}
          <br />
          {game.prices.current && <>To {formatPrice(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Click here to add this game to the cart!"
            variant="primary"
          >
            Add to Cart
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
