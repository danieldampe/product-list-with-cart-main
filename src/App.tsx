import { CartContextProvider } from './contexts/cart'
import { ProductCard } from './components/ProductCard'
import { Cart } from './components/Cart'
import { useProducts } from './hooks/useProducts'
import { Modal } from './components/Modal'

const App: React.FC = () => {
  const { products } = useProducts()

  return (
    <CartContextProvider>
      <Modal />
      <div className='relative p-6 bg-rose-50 overflow-y-hidden lg:p-[5.45rem]'>
        <div className='flex flex-col gap-8 max-w-[1210px] mx-auto lg:flex-row'>
          <div className='space-y-8'>
            <div>
              <h1 className='py-1 font-bold text-[2.475rem]/none'>Desserts</h1>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
          <div className='lg:w-3/5'>
            <Cart />
          </div>
        </div>
        <div className='absolute bottom-0 left-0 w-full p-1 text-center text-xs [&>a]:text-[hsl(228,45%,44%)]'>
          Challenge by <a href='https://www.frontendmentor.io?ref=challenge'>Frontend Mentor</a>.
          Coded by <a href='https://github.com/danieldampe'>danieldampe</a>.
        </div>
      </div>
    </CartContextProvider>
  )
}

export default App
