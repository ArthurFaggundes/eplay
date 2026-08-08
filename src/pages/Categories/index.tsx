import { useEffect, useState } from 'react'
import { Game } from '../Home'

import ProductsList from '../../components/ProductList'

// import resident from '../../assets/images/resident.png'
// import diablo from '../../assets/images/diablo.png'
// import starWars from '../../assets/images/star_wars.png'
// import zelda from '../../assets/images/zelda.png'

const Categories = () => {
  const [gamesAction, setGameAction] = useState<Game[]>([])
  const [gamesSports, setGameSports] = useState<Game[]>([])
  const [gamesSimulation, setGameSimulation] = useState<Game[]>([])
  const [gamesFight, setGameFight] = useState<Game[]>([])
  const [gamesRpg, setGameRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((resp) => resp.json())
      .then((resp) => setGameAction(resp))

    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((resp) => resp.json())
      .then((resp) => setGameSports(resp))

    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((resp) => resp.json())
      .then((resp) => setGameSimulation(resp))

    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((resp) => resp.json())
      .then((resp) => setGameFight(resp))

    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((resp) => resp.json())
      .then((resp) => setGameRpg(resp))
  }, [])

  return (
    <>
      <ProductsList games={gamesAction} title="Action" background="black" />
      <ProductsList games={gamesSports} title="Sports" background="grey" />
      <ProductsList
        games={gamesSimulation}
        title="Simulation"
        background="black"
      />
      <ProductsList games={gamesFight} title="Fight" background="grey" />
      <ProductsList games={gamesRpg} title="RPG" background="black" />
    </>
  )
}

export default Categories
