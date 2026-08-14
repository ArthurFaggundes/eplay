import { useEffect, useState } from 'react'
import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

import ProductsList from '../../components/ProductList'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          id="action"
          title="Action"
          background="black"
        />
        <ProductsList
          games={sportGames}
          id="sports"
          title="Sports"
          background="grey"
        />
        <ProductsList
          games={simulationGames}
          id="simulation"
          title="Simulation"
          background="black"
        />
        <ProductsList
          games={fightGames}
          id="fight"
          title="Fight"
          background="grey"
        />
        <ProductsList
          games={rpgGames}
          id="rpg"
          title="RPG"
          background="black"
        />
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Categories
