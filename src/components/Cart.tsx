import { useCart } from '../hooks/useCart'
import { CartItemCard } from './CartItemCard'
import IllustrationEmptyCart from '../assets/images/illustration-empty-cart.svg?react'
import IconCarbonNeutral from '../assets/images/icon-carbon-neutral.svg?react'
import { formatPrice } from '../utilities/format-price'
import { useModal } from '../hooks/useModal'

export const Cart: React.FC = () => {
  const { cart } = useCart()
  const { toggleModal } = useModal()
  const total = cart.reduce((acc, cur) => acc + cur.quantity, 0)
  const orderTotal = cart.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
  const formattedOrderTotal = formatPrice(orderTotal)

  return (
    <div className='p-6 bg-white rounded-lg'>
      <div>
        <h2 className='font-bold text-2xl text-red'>Your Cart <span>({total})</span>
        </h2>
      </div>
      <div className='mt-1.5'>
        {cart.length === 0
          ? (
            <div className='flex flex-col justify-center items-center gap-y-4 p-4'>
              <IllustrationEmptyCart />
              <p className='font-semibold text-sm text-rose-400'>Your added items will appear here</p>
            </div>
            )
          : (
            <div>
              {cart.map(({ id, name, price, quantity }, index) => (
                <CartItemCard
                  key={index}
                  id={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                />
              ))}
            </div>
            )}
      </div>
      {cart.length !== 0 && (
        <div className='flex flex-col gap-y-6 mt-6'>
          <div className='flex justify-between items-center'>
            <div className='text-sm'>Order Total</div>
            <div className='font-bold text-2xl'>{formattedOrderTotal}</div>
          </div>
          <div className='flex justify-center items-center gap-x-1.5 p-4 bg-[#fdf8f4] rounded-md'>
            <IconCarbonNeutral />
            <p className='text-sm'>This is a <span className='font-semibold'>carbon-neutral</span> delivery</p>
          </div>
          <button className='py-3.5 px-6 font-semibold text-white bg-red rounded-3xl' onClick={toggleModal}>Confirm Order</button>
        </div>
      )}
    </div>
  )
}
