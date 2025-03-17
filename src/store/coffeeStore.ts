import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { coffees, Coffee } from './coffeesData'

interface CoffeeStore {
  coffees: Coffee[]
  incrementCoffeeQuantity: (coffeeId: number) => void
  decrementCoffeeQuantity: (coffeeId: number) => void
  coffeesInCart: () => Coffee[]
  clearCart: () => void
}

export const useCoffeeStore = create<CoffeeStore>()(
  persist(
    (set, get) => ({
      coffees,
      incrementCoffeeQuantity: (coffeeId: number) =>
        set((state) => ({
          coffees: state.coffees.map((coffee) =>
            coffee.id === coffeeId
              ? { ...coffee, quantity: coffee.quantity + 1 }
              : coffee
          ),
        })),

      decrementCoffeeQuantity: (coffeeId: number) =>
        set((state) => ({
          coffees: state.coffees.map((coffee) =>
            coffee.id === coffeeId
              ? {
                  ...coffee,
                  quantity: coffee.quantity > 0 ? coffee.quantity - 1 : 0,
                }
              : coffee
          ),
        })),
      coffeesInCart: () => {
        return get().coffees.filter((coffee) => coffee.quantity > 0)
      },
      clearCart: () =>
        set((state) => ({
          coffees: state.coffees.map((coffee) => ({
            ...coffee,
            quantity: 0,
          })),
        })),
    }),
    {
      name: 'coffee-storage',
      partialize: (state) => ({ coffees: state.coffees }),
    }
  )
)
