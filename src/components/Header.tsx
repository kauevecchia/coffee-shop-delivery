import Logo from '../../public/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCoffeeStore } from '../store/coffeeStore'

export function Header() {
    const { coffeesInCart } = useCoffeeStore()
    const cartItems = coffeesInCart()

    return (
        <header className='flex justify-between items-center p-8 w-full'>
            <div className='max-w-7xl w-full mx-auto flex items-center justify-between'>
                <img src={Logo} alt="" className='cursor pointer'/>

                <div className='flex gap-3'>
                    <div className='flex items-center justify-center gap-1 p-2 bg-purple-light rounded-md'>
                        <MapPin size={22} weight='fill' className='text-my-purple'/>
                        <span className='text-purple-dark'>Porto Alegre, RS</span>
                    </div>
                    <div className='relative flex items-center justify-center bg-yellow-light p-2 rounded-md'>
                        <div className='absolute flex items-center justify-center right-0 top-0 rounded-full -translate-y-2 translate-x-2 bg-yellow-dark w-5 h-5 text-white font-bold text-xs'>
                            {cartItems.length}
                        </div>
                        <ShoppingCart size={22} weight='fill' className='text-yellow-dark cursor-pointer'/>
                    </div>
                </div>
            </div>
        </header>
    )
}