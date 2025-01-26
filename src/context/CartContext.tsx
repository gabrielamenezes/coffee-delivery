import { createContext, ReactNode, useState } from 'react'
const coffeesList = [
  {
    id: '1',
    name: 'Americano',
    price: 5.5,
    image: '/images/coffees/expresso.png',
    quantity: 1,
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: ['tradicional'],
  },
  {
    id: '2',
    name: 'Expresso Americano',
    price: 4.0,
    image: '/images/coffees/americano.png',
    quantity: 1,
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: ['tradicional'],
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    price: 6.0,
    image: '/images/coffees/expresso-cremoso.png',
    quantity: 1,
    description: 'Café expresso tradicional com espuma cremosa',
    type: ['tradicional'],
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    price: 4.0,
    image: '/images/coffees/cafe-gelado.png',
    quantity: 1,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['tradicional'],
  },
  {
    id: '5',
    name: 'Café Com Leite',
    price: 5.0,
    image: '/images/coffees/cafe-com-leite.png',
    quantity: 1,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['tradicional', 'com leite'],
  },
  {
    id: '6',
    name: 'Latte',
    price: 6.5,
    image: '/images/coffees/latte.png',
    quantity: 1,
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['tradicional'],
  },
  {
    id: '7',
    name: 'Capuccino',
    price: 7.0,
    image: '/images/coffees/capuccino.png',
    quantity: 1,
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['tradicional', 'com leite'],
  },
  {
    id: '8',
    name: 'Macchiatto',
    price: 9.9,
    image: '/images/coffees/macchiato.png',
    quantity: 1,
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['tradicional', 'com leite'],
  },
  {
    id: '9',
    name: 'Mocaccino',
    price: 9.9,
    image: '/images/coffees/mocacchino.png',
    quantity: 1,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['tradicional', 'com leite'],
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    price: 9.9,
    image: '/images/coffees/chocolate-quente.png',
    quantity: 1,
    description: 'Café expresso misturado com calda de chocolate, leite e açúcar',
    type: ['especial', 'com leite'],
  },
  {
    id: '11',
    name: 'Cubano',
    price: 10.9,
    image: '/images/coffees/cubano.png',
    quantity: 1,
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['especial', 'alcoolico', 'gelado'],
  },
  {
    id: '12',
    name: 'Havaiano',
    price: 10.9,
    image: '/images/coffees/havaiano.png',
    quantity: 1,
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: ['especial'],
  },

  {
    id: '13',
    name: 'Arabe',
    price: 10.9,
    image: '/images/coffees/arabe.png',
    quantity: 1,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['especial'],
  },
  {
    id: '14',
    name: 'Irlandês',
    price: 14.5,
    image: '/images/coffees/irlandes.png',
    quantity: 1,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['especial', 'alcoolico'],
  },

]
export interface Coffees {
  id: string,
  name: string,
  price: number,
  image: string,
  quantity: number,
  description: string,
  type: string[],
}
interface CartContextType {
  coffees: Coffees[],
  addQuantity: (coffee: Coffees) => void,
  // removeCoffee: (id: string) => void,
  // updateCoffeeQuantity: (id: string, quantity: number) => void,
}
export const CartContext = createContext({} as CartContextType)
interface CartContextProviderProps {
  children: ReactNode,
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffees[]>(coffeesList)

  function addQuantity(coffee: Coffees) {
    var selectedCoffee = coffees.find(item => item.id == coffee.id);
    if (selectedCoffee) {
      // Atualiza a quantidade do café existente
      const updatedCoffees = coffees.map(item =>
        item.id === coffee.id
          ? { ...item, quantity: (item.quantity || 1) + 1 } // Incrementa a quantidade
          : item
      );
      setCoffees(updatedCoffees);
  }
}

  return (
    <CartContext.Provider value={{
      coffees,
      addQuantity,
      // removeCoffee,
      // updateCoffeeQuantity,
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
