import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

export interface GalleryItem {
  //# interface é como se fosse uma classe
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

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
