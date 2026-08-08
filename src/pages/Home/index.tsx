import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

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
  const [offers, setOffers] = useState<Game[]>([])
  const [commingSoon, setCommingSoon] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/promocoes')
      .then((resp) => resp.json())
      .then((resp) => setOffers(resp))

    fetch('https://api-ebac.vercel.app/api/eplay/em-breve')
      .then((resp) => resp.json())
      .then((resp) => setCommingSoon(resp))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={offers} title="Offers" background="grey" />
      <ProductsList
        games={commingSoon}
        title="Comming soon"
        background="black"
      />
    </>
  )
}

export default Home
