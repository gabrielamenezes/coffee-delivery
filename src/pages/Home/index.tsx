import {
  Coffee,
  Package, ShoppingCartSimple, Timer,
} from '@phosphor-icons/react'
import { BannerContainer, HeroImageContainer, IconContainer, IconGridContainer } from './style'
import hero from '/images/hero.svg'

export const Home = () => {
  return (
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

      <HeroImageContainer>
        <img src={hero} alt="" />
      </HeroImageContainer>
    </BannerContainer>
  )
}
