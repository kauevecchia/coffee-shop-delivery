import { CoffeeQuantity } from "./CoffeeQuantity";
import { Trash } from '@phosphor-icons/react'
import { Coffee } from '../store/coffeesData'
import { useCoffeeStore } from "../store/coffeeStore";

interface CartItemsProps {
  coffee: Coffee
}

export function CartItems({ coffee }: CartItemsProps) {
  const { removeCoffee } = useCoffeeStore()

  return (
    <div className="flex gap-5 border-b-2 md:min-w-80 border-base-button py-6">
      <img src={coffee.image} alt={coffee.name} className="w-16 h-16" />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-base-subtitle">{coffee.name}</p>
          <p className="whitespace-nowrap font-bold text-base-text">
            R$ {coffee.price.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-2">
          <CoffeeQuantity coffeeId={coffee.id} />
          <button className="flex gap-1 p-2 bg-base-button rounded-md hover:bg-base-hover transition duration-300 items-center justify-center">
            <Trash size={16} className="text-my-purple" />
            <span
              className="text-xs text-base-text"
              onClick={() => removeCoffee(coffee.id)}
            >
              REMOVER
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}