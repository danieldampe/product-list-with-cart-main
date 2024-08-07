import { Cart, Product } from '../types'

type CartAction = {
  type: 'ADD_TO_CART'
  payload: Product
} | {
  type: 'REMOVE_ITEM' | 'INCREMENT_QUANTITY' | 'DECREMENT_QUANTITY'
  payload: Product['id']
} | {
  type: 'CLEAR'
}

const initialCart: Cart = []

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newCart = structuredClone(state)
      const product = action.payload
      newCart.push({
        ...product,
        quantity: 1
      })
      return newCart
    }
    case 'INCREMENT_QUANTITY': {
      const newCart = structuredClone(state)
      const productId = action.payload
      const productIndex = newCart.findIndex(productInCart => productInCart.id === productId)
      newCart[productIndex].quantity += 1
      return newCart
    }
    case 'DECREMENT_QUANTITY': {
      const newCart = structuredClone(state)
      const productId = action.payload
      const productIndex = newCart.findIndex(productInCart => productInCart.id === productId)
      const productInCart = newCart[productIndex]
      productInCart.quantity -= 1
      if (productInCart.quantity === 0) return newCart.filter(productInCart => productInCart.id !== productId)
      return newCart
    }
    case 'REMOVE_ITEM': {
      const productId = action.payload
      const newCart = state.filter(productInCart => productInCart.id !== productId)
      return newCart
    }
    case 'CLEAR': {
      return initialCart
    }
    default: {
      throw new Error('Unknown action')
    }
  }
}

export { initialCart, cartReducer }
