import IconAddToCart from '../assets/images/icon-add-to-cart.svg?react'
import IconIncrementQuantity from '../assets/images/icon-increment-quantity.svg?react'
import IconDecrementQuantity from '../assets/images/icon-decrement-quantity.svg?react'
import { ProductInCart } from '../types'

interface Props {
  quantity: ProductInCart['quantity'] | null
  onAddToCart: () => void
  onIncrementQuantity: () => void
  onDecrementQuantity: () => void
}

export const Button: React.FC<Props> = ({ quantity, onAddToCart, onIncrementQuantity, onDecrementQuantity }) => {
  return (
    <div className='w-40 h-11'>
      {quantity === null
        ? (
          <button onClick={onAddToCart} className='flex justify-center items-center size-full border-2 border-rose-300 bg-white rounded-3xl hover:border-red'>
            <div className='flex items-center gap-x-2'>
              <IconAddToCart />
              <span className='font-semibold text-sm'>Add to Cart</span>
            </div>
          </button>
          )
        : (
          <div className='flex justify-center items-center size-full bg-red rounded-3xl'>
            <div className='flex justify-between items-center w-4/5'>
              <button className='flex justify-center items-center size-5 border-2 border-white rounded-full hover:bg-white [&>svg>path]:hover:fill-red' onClick={onDecrementQuantity}>
                <IconDecrementQuantity />
              </button>
              <div className='font-semibold text-white'>{quantity}</div>
              <button className='flex justify-center items-center size-5 border-2 border-white rounded-full hover:bg-white [&>svg>path]:hover:fill-red' onClick={onIncrementQuantity}>
                <IconIncrementQuantity />
              </button>
            </div>
          </div>
          )}
    </div>
  )
}
