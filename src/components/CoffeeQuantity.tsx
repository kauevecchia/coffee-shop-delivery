import { Plus, Minus } from '@phosphor-icons/react';

export function CoffeeQuantity() {
    return (
        <div className='flex items-center justify-center gap-2 bg-base-button p-2 rounded-md'>
            <Plus className='cursor-pointer'/>
            <span>{}</span>
            <Minus className='cursor-pointer'/>
        </div>
    )
}