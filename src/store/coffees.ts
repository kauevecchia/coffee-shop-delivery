import { create } from "zustand"
import { persist } from "zustand/middleware"

import American from '../assets/American.svg'
import Arabic from '../assets/Arabic.svg'
import Cappucino from '../assets/HotChocolate.svg'
import CoffeeWithMilk from '../assets/CoffeeWithMilk.svg'
import ColdCoffee from '../assets/ColdCoffee.svg'
import CreamyExpresso from '../assets/CreamyExpresso.svg'
import Cuban from '../assets/Cuban.svg'
import Hawaiian from '../assets/Hawaiian.svg'
import HotChocolate from '../assets/HotChocolate.svg'
import Irish from '../assets/Irish.svg'
import Latte from '../assets/Latte.svg'
import Macchiato from '../assets/Macchiato.svg'
import Mochaccino from '../assets/v.svg'
import TraditionalExpresso from '../assets/TraditionalExpresso.svg'


interface Coffee {
    id: number
    name: string
    features: string[]
    image: string
    description: string
    quantity: number
    price: number
}

interface CoffeeStore {
    coffees: Coffee[]
    incrementCoffeeQuantity: (coffeeId: number, coffeeQuantity: number) => void
    decrementCoffeeQuantity: (coffeeId: number, coffeeQuantity: number) => void
    coffeesInCart: () => Coffee[]
    clearCart: () => void
}

export const useCoffeeStore = create<CoffeeStore>((set) => ({
    coffees: [],

    incrementCoffeeQuantity: (coffeeId: number) => set((state) => ({
        coffees: state.coffees.map((coffee) => 
            coffee.id === coffeeId ?
                { ...coffee, quantity: coffee.quantity + 1 }
                : coffee
        )
    })),

    decrementCoffeeQuantity: (coffeeId: number) => set((state) => ({
        coffees: state.coffees.map((coffee) => 
            coffee.id === coffeeId ?
                { ...coffee, quantity: coffee.quantity > 0 ? coffee.quantity - 1 : 0 }
                : coffee
        )
    })),

    coffeesInCart: (): Coffee[] => {
        return useCoffeeStore.getState().coffees.filter((coffee) => coffee.quantity > 0);
    },

    clearCart: () => set({ coffees: [] })
}));