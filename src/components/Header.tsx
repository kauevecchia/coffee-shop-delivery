import Logo from '../../public/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCoffeeStore } from '../store/coffeeStore'
import { NavLink, useNavigate } from 'react-router-dom'
import { Slide, toast, ToastContainer } from 'react-toastify'

export function Header() {
    const { coffeesInCart } = useCoffeeStore()
    const cartItems = coffeesInCart()
    const navigate = useNavigate()

    const notify = () => {
        toast.error(
          'Não é possível ir para a página de pagamento. Não há itens no carrinho.',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          }
        )
    }
    
    const handleClick = () => {
        if (cartItems.length > 0) {
            navigate("/checkout")
        } else {
            notify()
        }
    }

    return (
      <header className="flex justify-between items-center p-8 w-full">
        <ToastContainer />
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          <NavLink to="/" title="Home">
            <img src={Logo} alt="" className="cursor-pointer" />
          </NavLink>

          <div className="flex gap-3">
            <div className="flex items-center justify-center gap-1 p-2 bg-purple-light rounded-md">
              <MapPin size={22} weight="fill" className="text-my-purple" />
              <span className="text-purple-dark">Porto Alegre, RS</span>
            </div>
            <button
                className="relative flex items-center justify-center bg-yellow-light p-2 rounded-md"
                onClick={handleClick}
            >
                <div className="absolute flex items-center justify-center right-0 top-0 rounded-full -translate-y-2 translate-x-2 bg-yellow-dark w-5 h-5 text-white font-bold text-xs">
                {cartItems.length}
                </div>
                <ShoppingCart
                size={22}
                weight="fill"
                className="text-yellow-dark cursor-pointer"
                />
            </button>
          </div>
        </div>
      </header>
    )
}