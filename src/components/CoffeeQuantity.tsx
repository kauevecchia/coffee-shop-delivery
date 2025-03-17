import { Plus, Minus } from '@phosphor-icons/react';

interface CoffeeQuantityProps {
    coffeeId: number
}

export function CoffeeQuantity({ coffeeId }: CoffeeQuantityProps) {
    return (
      <div className="flex items-center justify-center gap-2 bg-base-button p-2 rounded-md">
        <Minus className="cursor-pointer"/>
        <span>{}</span>
        <Plus className="cursor-pointer"/>
      </div>
    )
}