import { Game } from '../pages/Home'

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((tempTotal, currentItem) => {
    if (currentItem.prices.current) {
      return (tempTotal += currentItem.prices.current) //* para tratar o nullable, só faz o calculo quando != null
    }
    return 0
  }, 0) // inicial = 0
}
