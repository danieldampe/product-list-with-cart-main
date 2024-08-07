import { ProductInCart } from '../types'
import { formatPrice } from '../utilities/format-price'
import IconRemoveItem from '../assets/images/icon-remove-item.svg?react'
import { useCart } from '../hooks/useCart'

type Props = Pick<ProductInCart, 'id' | 'name' | 'price' | 'quantity'>

export const CartItemCard: React.FC<Props> = ({ id, name, price, quantity }) => {
  const { removeItem } = useCart()
  const formattedPrice = `@ ${formatPrice(price)}`
  const totalPrice = quantity * price
  const formattedTotalPrice = formatPrice(totalPrice)
  const handlerClick = (): void => removeItem(id)

  return (
    <div className='flex justify-between items-center py-4 border-b-2 border-[#f5f5f5]'>
      <div className='space-y-2'>
        <div>
          <h3 className='font-semibold text-sm'>{name}</h3>
        </div>
        <div className='flex items-center text-sm'>
          <div className='mr-4 font-semibold text-red'>{quantity}x</div>
          <div className='mr-2 text-[#b0aaa7]'>{formattedPrice}</div>
          <div className='font-semibold text-[#968e8c]'>{formattedTotalPrice}</div>
        </div>
      </div>
      <button onClick={handlerClick}>
        <div className='p-1 border-2 border-rose-300 rounded-full'>
          <IconRemoveItem />
        </div>
      </button>
    </div>
  )
}
