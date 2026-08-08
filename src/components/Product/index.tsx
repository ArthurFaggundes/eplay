import Tag from '../Tag'
import { Card, Description, Title, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <Card>
      <img src={image} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}
export default Product
