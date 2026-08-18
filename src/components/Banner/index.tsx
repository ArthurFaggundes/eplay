import { formatPrice } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import Tag from '../Tag'
import Button from '../Button'

import { Image, Title, Prices } from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big"> Daily HighLight </Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            <s>From {formatPrice(game.prices.old)}</s> <br />
            to {formatPrice(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click here to don't miss out on the offer"
        >
          Don&apos;t miss out on the offer
        </Button>
      </div>
    </Image>
  )
}

export default Banner
