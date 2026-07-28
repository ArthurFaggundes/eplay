import { Image, Title, Prices } from './styles'

import bannerImg from '../../assets/images/banner-spiderman.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big"> Daily HighLight </Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales - PS4 & PS5</Title>
        <Prices>
          For <s>R$ 250,90</s> <br />
          to only R$ 145,99
        </Prices>
      </div>
      <Button
        type="link"
        to="/product"
        title="Click here to don't miss out on the offer"
      >
        Don&apos;t miss out on the offer
      </Button>
    </div>
  </Image>
)

export default Banner
