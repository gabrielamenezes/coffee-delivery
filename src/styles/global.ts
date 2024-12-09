import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${props => props.theme['background']};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875;
  }
  
`
