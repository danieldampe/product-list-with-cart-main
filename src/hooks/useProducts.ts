import data from '../assets/data.json'
import { Product } from '../types'

export const useProducts = (): { products: Product[] } => {
  const products: Product[] = data
  return { products }
}
