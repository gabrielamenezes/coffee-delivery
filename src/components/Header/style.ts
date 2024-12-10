import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  max-width: 80rem;
  margin: 0 auto;

  nav {
    display: flex;
    gap: 0.75rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      line-height: 1.3;
      font-size: 0.875rem;
      gap: 0.25rem;
      padding: 0.5rem;

      color: ${props => props.theme['purple-dark']};
      background: ${props => props.theme['purple-light']};
      
      font-size: 0.875rem;
      border-radius: 4px;
    }
  }
`
export const CartButtonContainer = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  background: ${props => props.theme['yellow-light']};
  border-radius: 4px;
  border: none;
  
  svg {
    color: ${props => props.theme['yellow-dark']};
    font-size: 1.375rem;
  }
 
`
