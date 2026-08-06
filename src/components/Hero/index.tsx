import bannerImg from '../../assets/images/banner-hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <s>De R$ 250,00</s> <br />
          Por R$ 190,00
        </p>
        <Button type="button" title="Click here to add this game to the cart!">
          Add to Cart
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
