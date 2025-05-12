import { createContext, ReactNode, useReducer, useState } from "react";
import { cartReducer, CartState, Coffees } from "../reducers/cart/reducer";
const coffeesList = [
  {
    id: "1",
    name: "Americano",
    price: 5.5,
    image: "/images/coffees/expresso.png",
    quantity: 1,
    description: "O tradicional café feito com água quente e grãos moídos",
    type: ["tradicional"],
  },
  {
    id: "2",
    name: "Expresso Americano",
    price: 4.0,
    image: "/images/coffees/americano.png",
    quantity: 1,
    description: "Expresso diluído, menos intenso que o tradicional",
    type: ["tradicional"],
  },
  {
    id: "3",
    name: "Expresso Cremoso",
    price: 6.0,
    image: "/images/coffees/expresso-cremoso.png",
    quantity: 1,
    description: "Café expresso tradicional com espuma cremosa",
    type: ["tradicional"],
  },
  {
    id: "4",
    name: "Expresso Gelado",
    price: 4.0,
    image: "/images/coffees/cafe-gelado.png",
    quantity: 1,
    description: "Bebida preparada com café expresso e cubos de gelo",
    type: ["tradicional"],
  },
  {
    id: "5",
    name: "Café Com Leite",
    price: 5.0,
    image: "/images/coffees/cafe-com-leite.png",
    quantity: 1,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    type: ["tradicional", "com leite"],
  },
  {
    id: "6",
    name: "Latte",
    price: 6.5,
    image: "/images/coffees/latte.png",
    quantity: 1,
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    type: ["tradicional"],
  },
  {
    id: "7",
    name: "Capuccino",
    price: 7.0,
    image: "/images/coffees/capuccino.png",
    quantity: 1,
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    type: ["tradicional", "com leite"],
  },
  {
    id: "8",
    name: "Macchiatto",
    price: 9.9,
    image: "/images/coffees/macchiato.png",
    quantity: 1,
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    type: ["tradicional", "com leite"],
  },
  {
    id: "9",
    name: "Mocaccino",
    price: 9.9,
    image: "/images/coffees/mocacchino.png",
    quantity: 1,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    type: ["tradicional", "com leite"],
  },
  {
    id: "10",
    name: "Chocolate Quente",
    price: 9.9,
    image: "/images/coffees/chocolate-quente.png",
    quantity: 1,
    description:
      "Café expresso misturado com calda de chocolate, leite e açúcar",
    type: ["especial", "com leite"],
  },
  {
    id: "11",
    name: "Cubano",
    price: 10.9,
    image: "/images/coffees/cubano.png",
    quantity: 1,
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    type: ["especial", "alcoolico", "gelado"],
  },
  {
    id: "12",
    name: "Havaiano",
    price: 10.9,
    image: "/images/coffees/havaiano.png",
    quantity: 1,
    description: "Bebida adocicada preparada com café e leite de coco",
    type: ["especial"],
  },

  {
    id: "13",
    name: "Arabe",
    price: 10.9,
    image: "/images/coffees/arabe.png",
    quantity: 1,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    type: ["especial"],
  },
  {
    id: "14",
    name: "Irlandês",
    price: 14.5,
    image: "/images/coffees/irlandes.png",
    quantity: 1,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    type: ["especial", "alcoolico"],
  },
];
interface CartContextType {
  coffees: Coffees[];
}
export const CartContext = createContext({} as CartContextType);
interface CartContextProviderProps {
  children: ReactNode;
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  // estado para representar os cafés da home (página inicial)
  const [coffees, setCoffees] = useState<Coffees[]>(coffeesList);
  // O primeiro parâmetro do useReducer é uma função. Essa função sempre recebe 2 argumentos:
  // O primeiro argumento é o state que é o valor atual (em tempo real) e uma action
  // Action é qual ação o usuário está querendo utilizar dentro do reducer
  const [cart, dispatch] = useReducer<any, any>(
    cartReducer,
    {
      cart: [],
      totalPrice: 0,
      totalItems: 0,
    },
    (initialState) => {
      const cart = localStorage.getItem("@coffee-delivery:cart-1.0.0");
      if (cart) {
        return JSON.parse(cart);
      }
      return initialState;
    }
  );
  return (
    <CartContext.Provider value={{ coffees }}>{children}</CartContext.Provider>
  );
}
