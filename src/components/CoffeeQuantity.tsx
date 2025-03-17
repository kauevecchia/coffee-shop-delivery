import { Plus, Minus } from '@phosphor-icons/react';
import { useCoffeeStore } from '../store/coffeeStore';

interface CoffeeQuantityProps {
    coffeeId: number
}

export function CoffeeQuantity({ coffeeId }: CoffeeQuantityProps) {
    const { coffees, decrementCoffeeQuantity, incrementCoffeeQuantity } = useCoffeeStore()

    const coffee = coffees.find(coffee => coffee.id === coffeeId)
    const coffeeQuantity = coffee ? coffee.quantity : 0

    return (
      <div className="flex items-center justify-center gap-2 bg-base-button p-2 rounded-md">
        <Minus className="cursor-pointer" onClick={() => decrementCoffeeQuantity(coffeeId)}/>
        <span>{coffeeQuantity}</span>
        <Plus className="cursor-pointer" onClick={() => incrementCoffeeQuantity(coffeeId)}/>
      </div>
    )
}