import ProductsList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const offers: Game[] = [
  {
    id: 1,
    category: 'Action',
    description: '...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', '$250'],
    image: resident
  },
  {
    id: 2,
    category: 'Action',
    description: '...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', '$250'],
    image: diablo
  },
  {
    id: 3,
    category: 'Action',
    description: '...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', '$250'],
    image: starWars
  },
  {
    id: 4,
    category: 'Action',
    description: '...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', '$250'],
    image: zelda
  }
]

const commingSoon: Game[] = [
  {
    id: 5,
    category: 'Action',
    description: '...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', '$250'],
    image: resident
  },
  {
    id: 6,
    category: 'Action',
    description: '...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', '$250'],
    image: diablo
  },
  {
    id: 7,
    category: 'Action',
    description: '...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', '$250'],
    image: starWars
  },
  {
    id: 8,
    category: 'Action',
    description: '...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', '$250'],
    image: zelda
  }
]

const Categories = () => (
  <>
    <ProductsList games={offers} title="RPG" background="grey" />
    <ProductsList games={commingSoon} title="Action" background="black" />
    <ProductsList games={offers} title="Adventure" background="grey" />
    <ProductsList games={commingSoon} title="FPS" background="black" />
  </>
)

export default Categories
