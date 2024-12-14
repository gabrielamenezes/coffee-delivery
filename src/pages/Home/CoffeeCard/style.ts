import styled from 'styled-components'

// CARD
export const CoffeeCardComponent = styled.div`
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
  align-items: center;
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
  cursor: pointer;
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
  gap: 1rem;
  padding: 0.5rem;
  width: 100%;
  button {
    border: none;
    cursor: pointer;

    &:hover {
      background: none;
    }
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
export const CoffeeTypeBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
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
