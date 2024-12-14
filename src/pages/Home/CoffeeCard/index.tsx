import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonCartAction,
  ButtonCartQuantityContainer,
  CoffeeCardComponent,
  CoffeeTypeBadge,
  CoffeeTypeBadgeContainer,
  ProductQuantitySelectorContainer,
} from './style'

import expressoTradicional from '/images/coffees/expresso.png'

export const CoffeeCard = () => {
  return (
    <CoffeeCardComponent>
      <img src={expressoTradicional} alt="" />
      <CoffeeTypeBadgeContainer>
        <CoffeeTypeBadge>
          Tradicional
        </CoffeeTypeBadge>
      </CoffeeTypeBadgeContainer>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <ProductQuantitySelectorContainer>
        <span className="coffeePrice">
          <span>R$ </span>4,00
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
