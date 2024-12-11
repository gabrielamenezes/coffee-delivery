import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
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
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
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
    margin-bottom: 2.125rem;
  }
`
// LISTA DE CAFÉS
export const CoffeesCardsContainer = styled.div`

`
// CARD
export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme['baseCard']};
  border-radius: 8px;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
  `
