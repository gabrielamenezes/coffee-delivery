import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    div {
      background: ${props => props.theme['purple-light']};

      display: flex;
      gap: 0.25rem;
      padding: 0.5rem;
      color: ${props => props.theme['purple-dark']};
      font-size: 0.875rem;
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
