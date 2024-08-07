import { ProductInCart } from '../types'
import { formatPrice } from '../utilities/format-price'

type Props = Pick<ProductInCart, 'name' | 'price' | 'quantity' | 'image'>

export const OrderItemCard: React.FC<Props> = ({ name, price, quantity, image }) => {
  const formattedPrice = `@ ${formatPrice(price)}`
  const totalPrice = quantity * price
  const formattedTotalPrice = formatPrice(totalPrice)

  return (
    <div className='flex justify-between items-center py-4 border-b-2 border-[#f5f5f5]'>
      <div className='flex items-center gap-x-4'>
        <div className='size-12 rounded-md overflow-hidden'>
          <img src={image.thumbnail} alt={name} />
        </div>
        <div className='space-y-2'>
          <div>
            <h3 className='font-semibold text-sm'>{name}</h3>
          </div>
          <div className='flex items-center text-sm'>
            <div className='mr-4 font-semibold text-red'>{quantity}x</div>
            <div className='mr-2 text-[#b0aaa7]'>{formattedPrice}</div>
          </div>
        </div>
      </div>
      <div>
        <div className='font-semibold text-black'>{formattedTotalPrice}</div>
      </div>
    </div>
  )
}
