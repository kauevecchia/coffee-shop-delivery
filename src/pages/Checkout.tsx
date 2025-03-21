import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
} from '@phosphor-icons/react'
import { CartItems } from '../components/CartItems'
import { useCoffeeStore } from '../store/coffeeStore'

export function Checkout() {
  const { coffeesInCart } = useCoffeeStore()
  const cartItems = coffeesInCart()

  const totalItems = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const deliveryFee = 3.5
  const totalOrderPrice = totalItems + deliveryFee 

  return (
    <div className="flex justify-center gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="font-baloo font-bold text-lg">Complete seu pedido</h3>
        <div className="bg-base-card p-10 flex flex-col gap-8 rounded-md">
          <div className="flex gap-2">
            <MapPinLine size={22} className="text-my-yellow" />
            <div>
              <p className="text-base-subtitle">Endereço de entrega</p>
              <p className="text-base-text text-sm">
                Informa o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-y-4">
              <input
                type="number"
                name=""
                id=""
                placeholder="CEP"
                className="bg-base-input rounded-md p-4 border border-base-button w-1/3 appearance-none"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Rua"
                className="bg-base-input rounded-md p-4 border border-base-buttonflex-grow"
              />
              <div className="flex gap-3">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Número"
                  className="bg-base-input rounded-md p-4 border border-base-button appearance-none"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Complemento (opcional)"
                  className="bg-base-input rounded-md p-4 border border-base-button flex-grow"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Bairro"
                  className="bg-base-input rounded-md p-4 border border-base-button"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Cidade"
                  className="bg-base-input rounded-md p-4 border border-base-button"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="UF"
                  className="bg-base-input rounded-md p-4 border border-base-button"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="bg-base-card p-10 flex flex-col gap-8 rounded-md">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-my-purple" />
            <div>
              <p className="text-base-subtitle">Pagamento</p>
              <p className="text-base-text text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex gap-3 bg-base-button p-4 rounded-md flex-1">
              <CreditCard size={16} className="text-my-purple" />
              <span>CARTÃO DE CRÉDITO</span>
            </button>
            <button className="flex gap-3 bg-base-button p-4 rounded-md flex-1">
              <Bank size={16} className="text-my-purple" />
              <span>CARTÃO DE DÉBITO</span>
            </button>
            <button className="flex gap-3 bg-base-button p-4 rounded-md flex-1">
              <Money size={16} className="text-my-purple" />
              <span>DINHEIRO</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-baloo font-bold text-lg mb-4">
          Cafés selecionados
        </h3>
        <div className="bg-base-card p-10 flex flex-col gap-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md w-full">
          <div>
            <div>
              {cartItems.map((coffee) => (
                <CartItems coffee={coffee} />
              ))}
            </div>
            <div className="flex flex-col gap-3 my-8">
              <div className="flex justify-between">
                <span className="text-sm text-base-text">Total de itens</span>
                <span className="text-base-text">
                  R${totalItems.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-base-text">Entrega</span>
                <span className="text-base-text">
                  R${deliveryFee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xl font-bold text-base-subtitle">
                  Total
                </span>
                <span className="text-xl font-bold text-base-subtitle">
                  R${totalOrderPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button className="py-3 px-2 w-full rounded-md bg-my-yellow font-bold text-white">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
