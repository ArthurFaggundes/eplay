import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        id="on-sale"
        title="Offers"
        background="grey"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        id="comming-soon"
        title="Comming soon"
        background="black"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
