import { Product } from '../types'
import { Button } from './Button'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utilities/format-price'

type Props = Product

const breakpoints = {
  tablet: 640,
  laptop: 1024,
  desktop: 1280
}

export const ProductCard: React.FC<Props> = (product) => {
  const { id, image, category, name, price } = product
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart()
  const producInCart = cart.find(product => product.id === id)
  const isProductInCart = producInCart !== undefined
  const quantity = isProductInCart ? producInCart.quantity : null
  const formattedPrice = formatPrice(price)
  const handlerAddToCart = (): void => addToCart(product)
  const handlerIncrementQuantity = (): void => incrementQuantity(id)
  const handlerDecrementQuantity = (): void => decrementQuantity(id)

  return (
    <div className='space-y-9'>
      <div className='relative'>
        <div className={`border-2 rounded-md overflow-hidden ${isProductInCart ? 'border-red' : ''}`}>
          <picture>
            <source media={`(min-width: ${breakpoints.desktop}px)`} srcSet={image.desktop} />
            <source media={`(min-width: ${breakpoints.tablet}px)`} srcSet={image.tablet} />
            <img src={image.mobile} alt={name} />
          </picture>
        </div>
        <div className='absolute left-2/4 -translate-x-2/4 -translate-y-2/4'>
          <Button
            quantity={quantity}
            onAddToCart={handlerAddToCart}
            onIncrementQuantity={handlerIncrementQuantity}
            onDecrementQuantity={handlerDecrementQuantity}
          />
        </div>
      </div>
      <div>
        <div className='text-sm text-rose-500'>{category}</div>
        <div className='font-semibold'>{name}</div>
        <div className='font-semibold text-red'>{formattedPrice}</div>
      </div>
    </div>
  )
}
