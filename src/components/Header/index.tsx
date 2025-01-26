import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { CartButtonContainer, HeaderContainer } from './style'
import logoCoffeeDelivery from '/images/logo.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (

    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Lodo do Coffee Delivery" />
      <nav>
        <div>
          <MapPin weight="fill" />
          Belo Horizonte, MG
        </div>
        <NavLink to={"/cart"} title='Carrinho de compras'>
          <CartButtonContainer name="Carrinho de compras">
            <ShoppingCart weight="fill" />
          </CartButtonContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
