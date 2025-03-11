import Logo from '../../public/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
    return (
        <header className='flex justify-between items-center py-8 w-full'>
            <div className='max-w-7xl w-full mx-auto flex items-center justify-between'>
                <img src={Logo} alt="" className='cursor pointer'/>

                <div className='flex gap-3'>
                    <div className='flex items-center justify-center gap-1 p-2 bg-purple-light rounded-md'>
                        <MapPin size={22} weight='fill' className='text-my-purple'/>
                        <span className='text-purple-dark'>Porto Alegre, RS</span>
                    </div>
                    <div className='flex items-center justify-center bg-yellow-light p-2 rounded-md'>
                        <ShoppingCart size={22} weight='fill' className='text-my-yellow cursor-pointer'/>
                    </div>
                </div>
            </div>
        </header>
    )
}