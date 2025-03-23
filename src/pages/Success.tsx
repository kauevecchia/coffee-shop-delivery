import { useCheckoutStore } from "../store/checkoutStore"
import SuccessImg from '../../public/Illustration.svg'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { useCoffeeStore } from "../store/coffeeStore"

export function Success() {
    const { formData, paymentMethod } = useCheckoutStore()


    return (
      <div className="w-full p-8">
        <div className="max-w-7xl w-full mx-auto">
          <h1 className="font-baloo text-3xl text-yellow-dark font-bold">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-xl text-base-subtitle">
            Agora é só aguardar que logo o café chegará a você
          </p>

          <div className="flex justify-between items-center mt-10">
            {/* Div de conteúdo */}
            <div className="flex-1 mb-6 max-w-lg rounded-br-md rounded-tl-md rounded-bl-3xl rounded-tr-3xl bg-gradient-to-r from-my-yellow to-my-purple p-0.5">
              <div className="rounded-br-md flex flex-col gap-8 rounded-bl-3xl rounded-tl-md rounded-tr-3xl bg-white p-10">
                <div className="flex gap-3 items-center">
                  <div className="h-8 w-8 bg-my-purple rounded-full p-2">
                    <MapPin size={16} weight="fill" className="text-white" />
                  </div>
                  <div>
                    <p>
                      Entrega em{' '}
                      <span className="font-bold">
                        Rua {formData.Rua}, {formData.Número}
                      </span>
                    </p>
                    <p>
                      {formData.Bairro} - {formData.Cidade} - {formData.UF}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-8 w-8 bg-my-yellow rounded-full p-2">
                    <Timer size={16} weight="fill" className="text-white" />
                  </div>
                  <div>
                    <p>Previsão de entrega</p>
                    <p>20 min - 30 min</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-8 w-8 bg-yellow-dark rounded-full p-2">
                    <CurrencyDollar
                      size={16}
                      weight="fill"
                      className="text-white"
                    />
                  </div>
                  <div>
                    <p>Pagamento na entrega</p>
                    <p className="font-bold">{paymentMethod}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="flex-shrink-0">
              <img src={SuccessImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
}