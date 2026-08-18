export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
