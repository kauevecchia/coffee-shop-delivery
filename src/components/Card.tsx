import { CoffeeQuantity } from './CoffeeQuantity'
import { ShoppingCart } from '@phosphor-icons/react';

export function Card() {
    return (
        <div className="flex flex-col items-center justify-between relative w-64 h-80 bg-base-card px-6 pb-6 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
            <img src={} alt={} className='w-32 h-32 absolute -top-6'/>

            <ul className='flex gap-1 mt-28 justify-center'>
                {}
            </ul>

            <div className="flex flex-col items-center flex-grow">
                <h3 className="font-baloo text-base-subtitle text-xl font-bold mt-4">
                    {}
                </h3>
                <p className="text-base-label text-sm text-center mt-2">
                    {}
                </p>
            </div>

            
            <div className="flex items-center justify-center mt-auto">
                <div>
                    <span className="mt-4 text-sm font-normal text-base-text">R$</span>
                    <span className="mr-6 mt-2 font-baloo text-2xl font-extrabold text-base-text">
                        {}
                    </span>
                </div>

                <CoffeeQuantity />
                <button className='bg-purple-dark p-2 rounded-md ml-2'>
                    <ShoppingCart size={22} weight='fill' className='text-my-background'/>
                </button>
            </div>
        </div>
    )
}