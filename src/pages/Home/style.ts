import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 3rem;
  background-image: url('/images/hero-bg.svg');
  background-size: cover;
  background-repeat: repeat;
  background-position: bottom;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Baloo 2';
    line-height: 1.3;
    max-width: 36.75rem;


    color: ${props => props.theme['base-title']};
    padding-top: 5.875rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 4.125rem;
    max-width: 36.75rem;

  }
`
export const IconGridContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  max-width: 36.75rem;
  margin-bottom: 6.75rem;


  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${props => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.3;
  }
`
export const BaseIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: 0.5rem;
  border-radius: 50%;
  svg {
    color: ${props => props.theme['background']};
    font-size: 1rem;
  } 
`
const CIRCLE_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
}
interface CircleProps {
  circleColor: keyof typeof CIRCLE_COLORS;
}
export const IconContainer = styled(BaseIconContainer)<CircleProps>`
  
  background: ${props => props.theme[CIRCLE_COLORS[props.circleColor]]};
  
`
export const CoffeesContainer = styled.main`
  max-width: 90rem;
  padding-top: 2rem;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
    font-family: 'Baloo 2';
    margin-bottom: 3.125rem;
  }
`
// LISTA DE CAFÉS
export const CoffeesCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`
// CARD
export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  background-color: ${props => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -3.75rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-weight: bold;
  }
  p {
    text-align: center;
    font-size: 0.875rem;
    max-width: 13.5rem;
    color: ${props => props.theme['base-label']};
    margin: 0.5rem 0 2.06rem;
  }
  `
export const ProductQuantitySelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.5rem;
  .coffeePrice {
    color: ${props => props.theme['base-text']};
    font-family: 'Baloo 2';
    font-weight: bolder;
    font-size: 1.5rem;
    line-height: 1.3;

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 0.775rem;
    }

  }
`

export const CallToActionBaseBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
`

export const ButtonCartAction = styled(CallToActionBaseBtn)`
  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['base-card']} ;

  &:hover {
    background: ${props => props.theme['purple']};
  }

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }
`

export const ButtonCartQuantityContainer = styled.div`
  background: ${props => props.theme['base-button']};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  button {
    border: none;
  }
  span {
    flex: 1;
    text-align: center;
  }
  button > svg {
    color: ${props => props.theme['purple']};
    font-size: 1rem;
  }
`

export const CoffeeTypeBadge = styled.span`
  border-radius: 4px;
  color: ${props => props.theme['yellow-dark']};
  background-color: ${props => props.theme['yellow-light']};
  display: block;
  margin: 1rem auto;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-size: 0.625rem;
  line-height: 1.3;
  font-family: 'Roboto';
  font-weight: bold;

`
