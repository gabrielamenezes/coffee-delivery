import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { CartButtonContainer, HeaderContainer } from './style'
import logoCoffeeDelivery from '/images/logo.svg'

export const Header = () => {
  return (

    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Lodo do Coffee Delivery" />
      <nav>
        <div>
          <MapPin />
        </div>
        <CartButtonContainer name="Carrinho de compras">
          <ShoppingCart />
        </CartButtonContainer>
      </nav>
    </HeaderContainer>
  )
}
