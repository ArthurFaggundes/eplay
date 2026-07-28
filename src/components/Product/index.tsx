import Tag from '../Tag'
import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src=" https://picsum.photos/223/250" />
    <Title>Game Name</Title>
    <Tag>Category</Tag>
    <Tag>OS</Tag>
    <Description>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel delectus
      sapiente et autem odio pariatur eveniet qui, a eligendi tenetur, tempore,
      illo dolorem ab reiciendis quaerat! Mollitia, cum. Magnam, id?
    </Description>
  </Card>
)

export default Product
