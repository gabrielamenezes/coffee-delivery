import { createContext, ReactNode, useState } from 'react'

interface Coffees {
  id: string,
  name: string,
  price: number,
  image: string,
  quantity: number,
  type: string[],
}
interface CartContextType {
  coffee: Coffees[],
  addCoffee: (coffee: Coffees) => void,
  removeCoffee: (id: string) => void,
  updateCoffeeQuantity: (id: string, quantity: number) => void,
}
export const CartContext = createContext({} as CartContextType)
interface CartContextProviderProps {
  children: ReactNode,
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffees[]>([])
}
