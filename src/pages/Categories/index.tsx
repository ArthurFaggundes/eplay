import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

import ProductsList from '../../components/ProductList'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()

  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()

  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        id="action"
        title="Action"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        id="sports"
        title="Sports"
        background="grey"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={simulationGames}
        id="simulation"
        title="Simulation"
        background="black"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        id="fight"
        title="Fight"
        background="grey"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        id="rpg"
        title="RPG"
        background="black"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
