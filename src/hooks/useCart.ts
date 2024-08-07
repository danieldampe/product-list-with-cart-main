import { useContext } from 'react'
import { CartContext, CartContextType } from '../contexts/cart'

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === null) throw new Error('Can not access this context.')
  return context
}
