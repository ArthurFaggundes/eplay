import { useEffect, useState } from 'react'

import { Image, Title, Prices } from './styles'
import { Game } from '../../pages/Home'

import { formatPrice } from '../ProductList'

import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/destaque')
      .then((resp) => resp.json())
      .then((resp) => setGame(resp))
  }, [])

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
            <s>For {formatPrice(game.prices.old)}</s> <br />
            to only {formatPrice(game.prices.current)}
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
