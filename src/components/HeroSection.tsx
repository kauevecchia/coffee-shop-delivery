import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import HomeImg from '../../public/HomeImg.svg'

export function HeroSection() {
    return (
        <div className='mx-10 flex flex-col justify-around md:mx-40 md:flex-row'>
            <div className='md:w-144'>
                <h1 className='font-baloo text-3xl font-extrabold' >Encontre o café perfeito para qualquer hora do dia</h1>
                <p className='mt-4 text-base-subtitle'>Com o Coffee Delivery, você recebe seu café onde estiver, a qualquer hora</p>
                <div className='mt-16 grid grid-cols-1 gap-8 text-base-text md:grid-cols-2 md:whitespace-nowrap'>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full bg-yellow-dark p-2'>
                            <ShoppingCart size={16} weight='fill' className='text-my-background' />
                        </div>
                        <p className='text-base-text'>Compra simples e segura</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full bg-base-text p-2'>
                            <Coffee size={16} weight='fill' className='text-my-background' />
                        </div>
                        <p className='text-base-text'>Embalagem mantém o café intacto</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full bg-my-yellow p-2'>
                            <Timer size={16} weight='fill' className='text-my-background' />
                        </div>
                        <p className='text-base-text'>Entrega rápida e rastreada</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full bg-my-purple p-2'>
                            <Package size={16} weight='fill' className='text-my-background' />
                        </div>
                        <p className='text-base-text'>O café chega fresquinho até você</p>
                    </div>
                </div>
            </div>
            <img src={HomeImg} alt="" className='hidden md:block'/>
        </div>
    )
}