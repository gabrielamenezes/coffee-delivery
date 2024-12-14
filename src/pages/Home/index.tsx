import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from '@phosphor-icons/react'
import {
  BannerContainer,
  CoffeesCardsContainer,
  CoffeesContainer,
  IconContainer,
  IconGridContainer,
} from './style'
import hero from '/images/hero.svg'
// import americano from '/images/coffees/americano.png'
// import expressoCremoso from '/images/coffees/expresso-cremoso.png'
// import expressoGelado from '/images/coffees/cafe-gelado.png'
// import cafeComLeite from '/images/coffees/cafe-com-leite.png'
import { useState } from 'react'
import { CoffeeCard } from '../../components/CoffeeCard'

interface CoffeeType {
  id: string,
  name: string,
  price: number,
  image: string,
  quantity: number,
  type: string[],
}
export const Home = () => {
  const [coffee, setCoffee] = useState<CoffeeType[]>([])
  return (
    <div>
      <BannerContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver,
            a qualquer hora
          </p>
          <IconGridContainer>
            <div>
              <IconContainer circleColor="yellowDark">
                <ShoppingCart className="addToCartIcon" weight="fill" />
              </IconContainer>
              Compra simpes e segura
            </div>

            <div>
              <IconContainer circleColor="gray">
                <Package weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </div>

            <div>
              <IconContainer circleColor="yellow">
                <Timer weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </div>

            <div>
              <IconContainer circleColor="purple">
                <Coffee weight="fill" />
              </IconContainer>
              O café chega fresquinho até você
            </div>
          </IconGridContainer>
        </div>

        <div>
          <img src={hero} alt="Imagem ilustrativa de um copo de café" />
        </div>
      </BannerContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <CoffeesCardsContainer>
          {coffee.map(item => {
            return (
              <CoffeeCard key={item.id} />
            )
          })}
        </CoffeesCardsContainer>
      </CoffeesContainer>
    </div>

  )
}
