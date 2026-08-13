import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' // usado para alterar parâmetros na rota

import { Game } from '../Home'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams() // ao invéz de por teste.id da para só por {id}
  const { data: game } = useGetGameQuery(id!) // id! indica que é obrigatório

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="About the game" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Read More" background="grey">
        <p>
          <b>Plataform:</b> {game.details.system} <br />
          <b>Developer:</b> {game.details.developer} <br />
          <b>Publisher:</b> {game.details.publisher} <br />
          <b>Languages:</b> The game offers suport to the following languages:{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
