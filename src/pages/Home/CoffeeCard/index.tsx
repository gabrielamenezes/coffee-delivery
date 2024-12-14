import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonCartAction,
  ButtonCartQuantityContainer,
  CoffeeCardComponent,
  CoffeeTypeBadge,
  CoffeeTypeBadgeContainer,
  ProductQuantitySelectorContainer,
} from './style'
import { Coffees } from '../../../context/CartContext'

interface CoffeeCardProps {
  coffee: Coffees
}
export const CoffeeCard = ({ coffee } : CoffeeCardProps) => {
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
          <button>
            <Minus />
          </button>
          <span>1</span>
          <button>
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
