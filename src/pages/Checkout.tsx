import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  Money,
  CreditCard,
} from '@phosphor-icons/react'
import { CartItems } from '../components/CartItems'
import { useCoffeeStore } from '../store/coffeeStore'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const checkoutFormValidationSchema = zod.object({
  CEP: zod.string().regex(/^\d{5}-\d{3}$/, 'Formato de CEP inválido, use "00000-000"'),
  Rua: zod.string().min(1, "Insira um nome de rua válido."),
  Número: zod.number().min(1, "Insira um número válido."),
  Complemento: zod.string().optional(),
  Bairro: zod.string().min(1, "Insira um nome de bairro válido."),
  Cidade: zod.string().min(1, "Insira um nome de cidade válido"),
  UF: zod.number().min(1, "Insira um UF válido.").max(2, "Insira um UF válido.")
})

export function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("")

  type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema)
  })
  

  const handlePaymentChange = (method: string) => {
    setSelectedPayment(method)
  }

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
                id="CEP"
                placeholder="CEP"
                className="bg-base-input rounded-md p-4 border border-base-button w-1/3 appearance-none"
                {...register("CEP")}
              />
              <input
                type="text"
                id="Rua"
                placeholder="Rua"
                className="bg-base-input rounded-md p-4 border border-base-button flex-grow"
                {...register("Rua")}
              />
              <div className="flex gap-3">
                <input
                  type="number"
                  id="Número"
                  placeholder="Número"
                  className="bg-base-input rounded-md p-4 border border-base-button appearance-none"
                  {...register("Número")}
                />
                <input
                  type="text"
                  id="Complemento"
                  placeholder="Complemento (opcional)"
                  className="bg-base-input rounded-md p-4 border border-base-button flex-grow"
                  {...register("Complemento")}
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  id="Bairro"
                  placeholder="Bairro"
                  className="bg-base-input rounded-md p-4 border border-base-button"
                  {...register("Bairro")}
                />
                <input
                  type="text"
                  id="Cidade"
                  placeholder="Cidade"
                  className="bg-base-input rounded-md p-4 border border-base-button"
                  {...register("Cidade")}
                />
                <input
                  type="text"
                  id="UF"
                  placeholder="UF"
                  className="bg-base-input rounded-md p-4 border border-base-button"
                  {...register("UF")}
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
            <label>
              <input
                type="checkbox"
                checked={selectedPayment === 'credit'}
                onChange={() => handlePaymentChange('credit')}
                className="hidden"
              />
              <div
                className={`flex gap-3 items-center bg-base-button p-4 rounded-md flex-1 border hover:bg-base-hover cursor-pointer ${
                  selectedPayment === 'credit'
                    ? 'border-my-purple bg-purple-light'
                    : 'bg-base-button border-transparent'
                }`}
              >
                <CreditCard size={16} className="text-my-purple" />
                <span>CARTÃO DE CRÉDITO</span>
              </div>
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedPayment === 'debit'}
                onChange={() => handlePaymentChange('debit')}
                className="hidden"
              />
              <div
                className={`flex gap-3 items-center bg-base-button p-4 rounded-md flex-1 border hover:bg-base-hover cursor-pointer ${
                  selectedPayment === 'debit'
                    ? 'border-my-purple bg-purple-light'
                    : 'bg-base-button border-transparent'
                }`}
              >
                <Bank size={16} className="text-my-purple" />
                <span>CARTÃO DE DÉBITO</span>
              </div>
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedPayment === 'money'}
                onChange={() => handlePaymentChange('money')}
                className="hidden"
              />
              <div
                className={`flex gap-3 items-center bg-base-button p-4 rounded-md flex-1 border hover:bg-base-hover cursor-pointer ${
                  selectedPayment === 'money'
                    ? 'border-my-purple bg-purple-light'
                    : 'bg-base-button border-transparent'
                }`}
              >
                <Money size={16} className="text-my-purple" />
                <span>DINHEIRO</span>
              </div>
            </label>
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
            <button className="py-3 px-2 w-full rounded-md bg-my-yellow font-bold text-white hover:bg-yellow-dark">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
