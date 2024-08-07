import { createContext, ReactNode, useReducer } from 'react'
import { cartReducer, initialCart } from '../reducers/cart'
import { Cart, Product } from '../types'

interface Props {
  children: ReactNode
}

export interface CartContextType {
  cart: Cart
  addToCart: (param: Product) => void
  removeItem: (param: Product['id']) => void
  incrementQuantity: (param: Product['id']) => void
  decrementQuantity: (param: Product['id']) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)

  const addToCart = (product: Product): void => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeItem = (productId: Product['id']): void => dispatch({
    type: 'REMOVE_ITEM',
    payload: productId
  })

  const incrementQuantity = (productId: Product['id']): void => dispatch({
    type: 'INCREMENT_QUANTITY',
    payload: productId
  })

  const decrementQuantity = (productId: Product['id']): void => dispatch({
    type: 'DECREMENT_QUANTITY',
    payload: productId
  })

  const clear = (): void => dispatch({
    type: 'CLEAR'
  })

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      incrementQuantity,
      decrementQuantity,
      clear
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
