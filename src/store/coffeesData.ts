import American from '../assets/images/American.svg'
import Arabic from '../assets/images/Arabic.svg'
import Capuccino from '../assets/images/Capuccino.svg'
import CoffeeWithMilk from '../assets/images/CoffeeWithMilk.svg'
import ColdCoffee from '../assets/images/ColdCoffee.svg'
import CreamyExpresso from '../assets/images/CreamyExpresso.svg'
import Cuban from '../assets/images/Cuban.svg'
import Hawaiian from '../assets/images/Hawaiian.svg'
import HotChocolate from '../assets/images/HotChocolate.svg'
import Irish from '../assets/images/Irish.svg'
import Latte from '../assets/images/Latte.svg'
import Macchiato from '../assets/images/Macchiato.svg'
import Mochaccino from '../assets/images/Mochaccino.svg'
import TraditionalExpresso from '../assets/images/TraditionalExpresso.svg'

export interface Coffee {
    id: number
    name: string
    features: string[]
    image: string
    description: string
    quantity: number
    price: number
}

export const coffees: Coffee[] = [
    {
    id: 0,
    name: 'Expresso Tradicional',
    image: TraditionalExpresso,
    description: 'O tradicional café feito com água quente e grãos moídos',
    features: ['TRADICIONAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 1,
    name: 'Expresso Americano',
    image: American,
    description: 'Expresso diluído, menos intenso que o tradicional',
    features: ['TRADICIONAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Expresso Cremoso',
    image: CreamyExpresso,
    description: 'Café expresso tradicional com espuma cremosa',
    features: ['TRADICIONAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 3,
    name: 'Expresso Gelado',
    image: ColdCoffee,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    features: ['TRADICIONAL', 'GELADO'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 4,
    name: 'Café com Leite',
    image: CoffeeWithMilk,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    features: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 5,
    name: 'Latte',
    image: Latte,
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    features: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 6,
    name: 'Capuccino',
    image: Capuccino,
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    features: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 7,
    name: 'Macchiato',
    image: Macchiato,
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    features: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 8,
    name: 'Mocaccino',
    image: Mochaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    features: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    image: HotChocolate,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    features: ['ESPECIAL', 'COM LEITE'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 10,
    name: 'Cubano',
    image: Cuban,
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    features: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 11,
    name: 'Havaiano',
    image: Hawaiian,
    description: 'Bebida adocicada preparada com café e leite de coco',
    features: ['ESPECIAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 12,
    name: 'Árabe',
    image: Arabic,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    features: ['ESPECIAL'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 13,
    name: 'Irlandês',
    image: Irish,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    features: ['ESPECIAL', 'ALCOÓLICO'],
    price: 9.9,
    quantity: 0,
  },    
] 