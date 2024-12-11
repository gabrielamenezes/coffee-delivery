import {
  Coffee,
  Package, ShoppingCartSimple, Timer,
} from '@phosphor-icons/react'
import {
  BannerContainer, CoffeeCard, CoffeesCardsContainer, CoffeesContainer, IconContainer, IconGridContainer,
} from './style'
import hero from '/images/hero.svg'
import expressoTradicional from '/images/coffees/expresso.png'

export const Home = () => {
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
                <ShoppingCartSimple weight="fill" />
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
          <CoffeeCard>
            <img src={expressoTradicional} alt="" />
            <span>Tradicional</span>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$ 4,00</span>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button>Comprar</button>
            </div>
          </CoffeeCard>
        </CoffeesCardsContainer>
      </CoffeesContainer>
    </div>

  )
}
