import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonCartAction,
  ButtonCartQuantityContainer,
  CoffeeCardComponent,
  CoffeeTypeBadge,
  CoffeeTypeBadgeContainer,
  ProductQuantitySelectorContainer,
} from './style'
import { CartContext, Coffees } from '../../../context/CartContext'
import { useContext } from 'react'

interface CoffeeCardProps {
  coffee: Coffees
}
export const CoffeeCard = ({ coffee } : CoffeeCardProps) => {
  const { addQuantity, removeQuantity } = useContext(CartContext);
  return (
    <CoffeeCardComponent>
      <img src={coffee.image} alt="" />
      <CoffeeTypeBadgeContainer>
        {coffee.type.map((type) => {
          return <CoffeeTypeBadge key={type}>{type}</CoffeeTypeBadge>
        })}
      </CoffeeTypeBadgeContainer>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <ProductQuantitySelectorContainer>
        <span className="coffeePrice">
          <span>R$ </span>{coffee.price}
        </span>
        <ButtonCartQuantityContainer>
          <button onClick={() => removeQuantity(coffee)}>
            <Minus />
          </button>
          <span>{coffee.quantity}</span>
          <button onClick={() => addQuantity(coffee)}>
            <Plus />
          </button>
        </ButtonCartQuantityContainer>
        <ButtonCartAction name="Adicionar ao carrinho">
          <ShoppingCart className="addToCartIcon" weight="fill" />
        </ButtonCartAction>
      </ProductQuantitySelectorContainer>
    </CoffeeCardComponent>
  )
}
