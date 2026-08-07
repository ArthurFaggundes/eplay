import { useParams } from 'react-router-dom' // usado para alterar parâmetros na rota
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import resident from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams() // ao invéz de por teste.id da para só por {id}

  return (
    <>
      <Hero />
      <Section title="About the game" background="black">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          facere asperiores sapiente rerum! Magnam praesentium omnis maiores
          ducimus illum mollitia, perspiciatis unde doloremque nam maxime, amet
          laudantium beatae animi? Ab!
        </p>
      </Section>
      <Section title="Read More" background="grey">
        <p>
          <b>Lorem ipsum dolor sit:</b> Amet consectetur adipisicing. <br />
          <b>Explicabo facere:</b> Asperiores sapiente rerum. <br />
          <b>Magnam:</b> Praesentium omnis maiores. <br />
          <b>Ducimus illum mollitia:</b> perspiciatis unde doloremque nam
          maxime, amet laudantium beatae animi.
        </p>
      </Section>
      <Gallery name="Spiderman - Miles Morales" defaultCover={resident} />
    </>
  )
}

export default Product
