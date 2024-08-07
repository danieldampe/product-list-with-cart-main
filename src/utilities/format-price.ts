export const formatPrice = (price: number): string => {
  const newPrice = '$' + price.toFixed(2)
  return newPrice
}
