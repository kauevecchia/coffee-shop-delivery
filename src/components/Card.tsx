import { Slide, toast } from 'react-toastify';
import { CoffeeQuantity } from './CoffeeQuantity'
import { ShoppingCart } from '@phosphor-icons/react';
import { useCoffeeStore } from '../store/coffeeStore';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  coffeeData: {
    id: number
    name: string
    features: string[]
    image: string
    description: string
    quantity: number
    price: number
  }
}

export function Card({ coffeeData }: CardProps) {
    const { coffeesInCart } = useCoffeeStore()
    const cartItems = coffeesInCart()
    const navigate = useNavigate()

    const notify = () => {
      toast.error(
        'Não é possível ir para a página de pagamento. Não há itens no carrinho.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        }
      )
    }

    const handleClick = () => {
      if (cartItems.length > 0) {
        navigate('/checkout')
      } else {
        notify()
      }
    }

    return (
        <div className="flex flex-col items-center justify-between relative w-64 h-80 bg-base-card px-6 pb-6 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
            <img src={coffeeData.image} alt={coffeeData.name} className='w-32 h-32 absolute -top-6'/>

            <ul className='flex gap-1 mt-28 justify-center'>
                {coffeeData.features.map(feature => 
                    <li className="bg-yellow-light text-yellow-dark font-bold px-2 py-1 rounded-full text-xs">{feature}</li>
                )}
            </ul>

            <div className="flex flex-col items-center flex-grow">
                <h3 className="font-baloo text-base-subtitle text-xl font-bold mt-4">
                    {coffeeData.name}
                </h3>
                <p className="text-base-label text-sm text-center mt-2">
                    {coffeeData.description}
                </p>
            </div>

            
            <div className="flex items-center justify-center mt-auto">
                <div>
                    <span className="mt-4 text-sm font-normal text-base-text">R$</span>
                    <span className="mr-6 mt-2 font-baloo text-2xl font-extrabold text-base-text">
                        {coffeeData.price.toFixed(2)}
                    </span>
                </div>

                <CoffeeQuantity
                    coffeeId={coffeeData.id}
                />
                <button className='bg-purple-dark p-2 rounded-md ml-2' onClick={handleClick}>
                    <ShoppingCart size={22} weight='fill' className='text-my-background'/>
                </button>
            </div>
        </div>
    )
}