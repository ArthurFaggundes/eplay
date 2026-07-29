import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Action"
          description="test"
          image="https://picsum.photos/223/250"
          infos={['-10%', '$150']}
          system="Windows"
          title="game title"
        />
        <Product
          category="Action"
          description="test"
          image="https://picsum.photos/223/250"
          infos={['-10%', '$150']}
          system="Windows"
          title="game title"
        />
        <Product
          category="Action"
          description="test"
          image="https://picsum.photos/223/250"
          infos={['-10%', '$150']}
          system="Windows"
          title="game title"
        />
        <Product
          category="Action"
          description="test"
          image="https://picsum.photos/223/250"
          infos={['-10%', '$150']}
          system="Windows"
          title="game title"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
