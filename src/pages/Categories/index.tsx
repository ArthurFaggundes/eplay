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
        <ProductsList games={actionGames} title="Action" background="black" />
        <ProductsList games={sportGames} title="Sports" background="grey" />
        <ProductsList
          games={simulationGames}
          title="Simulation"
          background="black"
        />
        <ProductsList games={fightGames} title="Fight" background="grey" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Categories
