import { useCart } from '../hooks/useCart'
import IconOrderConfirmed from '../assets/images/icon-order-confirmed.svg?react'
import { useModal } from '../hooks/useModal'
import { formatPrice } from '../utilities/format-price'
import { OrderItemCard } from './OrderItemCard'

export const Modal: React.FC = () => {
  const { cart, clear } = useCart()
  const { toggleModal } = useModal()
  const orderTotal = cart.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
  const formattedOrderTotal = formatPrice(orderTotal)

  const handlerClick = (): void => {
    toggleModal()
    clear()
  }

  return (
    <div id='modal' className='fixed top-0 left-0 z-50 size-full flex justify-center items-end bg-black bg-opacity-75 invisible md:items-center'>
      <div id='order' className='w-full max-w-[590px] max-h-[80vh] p-6 bg-white rounded-t-xl translate-y-full transition-transform overflow-y-scroll md:max-h-[695px] md:p-10 md:rounded-xl'>
        <div className='space-y-8'>
          <div>
            <IconOrderConfirmed />
            <h4 className='mt-5 font-bold text-[2.5rem] leading-tight'>Order Confirmed</h4>
            <p className='mt-1.5 text-rose-500'>We hope you enjoy your food!</p>
          </div>
          <div className='p-6 bg-rose-50 rounded-md'>
            <div>
              {cart.map(({ id, name, price, quantity, image }) => (
                <OrderItemCard
                  key={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                  image={image}
                />
              ))}
            </div>
            <div className='mt-6 flex justify-between items-center'>
              <div className='text-sm'>Order Total</div>
              <div className='font-bold text-2xl'>{formattedOrderTotal}</div>
            </div>
          </div>
          <div>
            <button className='w-full py-3.5 px-6 font-semibold text-white bg-red rounded-3xl' onClick={handlerClick}>Start New Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}
