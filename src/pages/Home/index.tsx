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
  ButtonCartAction,
  ButtonCartQuantityContainer,
  CoffeeCard,
  CoffeesCardsContainer,
  CoffeesContainer,
  CoffeeTypeBadge,
  CoffeeTypeBadgeContainer,
  IconContainer,
  IconGridContainer,
  ProductQuantitySelectorContainer,
} from './style'
import hero from '/images/hero.svg'
import expressoTradicional from '/images/coffees/expresso.png'
import americano from '/images/coffees/americano.png'
import expressoCremoso from '/images/coffees/expresso-cremoso.png'
import expressoGelado from '/images/coffees/cafe-gelado.png'
import cafeComLeite from '/images/coffees/cafe-com-leite.png'

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
          <CoffeeCard>
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
          </CoffeeCard>

          <CoffeeCard>
            <img src={americano} alt="" />
            <CoffeeTypeBadgeContainer>
              <CoffeeTypeBadge>
                Tradicional
              </CoffeeTypeBadge>
            </CoffeeTypeBadgeContainer>
            <h3>Expresso Americano</h3>
            <p>Expresso diluído, menos intenso que o tradicional</p>
            <ProductQuantitySelectorContainer>
              <span className="coffeePrice">
                <span>R$ </span>9,90
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
          </CoffeeCard>

          <CoffeeCard>
            <img src={expressoCremoso} alt="" />
            <CoffeeTypeBadgeContainer>
              <CoffeeTypeBadge>
                Tradicional
              </CoffeeTypeBadge>
            </CoffeeTypeBadgeContainer>
            <h3>Expresso Cremoso</h3>
            <p>Café expresso tradicional com espuma cremosa</p>
            <ProductQuantitySelectorContainer>
              <span className="coffeePrice">
                <span>R$ </span>9,90
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
          </CoffeeCard>

          <CoffeeCard>
            <img src={expressoGelado} alt="" />
            <CoffeeTypeBadgeContainer>
              <CoffeeTypeBadge>
                Tradicional
              </CoffeeTypeBadge>
              <CoffeeTypeBadge>
                Gelado
              </CoffeeTypeBadge>
            </CoffeeTypeBadgeContainer>
            <h3>Expresso Gelado</h3>
            <p>Bebida preparada com café expresso e cubos de gelo</p>
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
          </CoffeeCard>

          <CoffeeCard>
            <img src={cafeComLeite} alt="" />
            <CoffeeTypeBadgeContainer>
              <CoffeeTypeBadge>
                Tradicional
              </CoffeeTypeBadge>
              <CoffeeTypeBadge>
                Com Leite
              </CoffeeTypeBadge>
            </CoffeeTypeBadgeContainer>
            <h3>Café com Leite</h3>
            <p>Meio a meio de expresso tradicional com leite vaporizado</p>
            <ProductQuantitySelectorContainer>
              <span className="coffeePrice">
                <span>R$ </span>9,00
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
          </CoffeeCard>
        </CoffeesCardsContainer>
      </CoffeesContainer>
    </div>

  )
}
