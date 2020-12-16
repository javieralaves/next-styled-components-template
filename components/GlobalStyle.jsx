import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const theme = {
  colors: {
    primary: 'blue',
    secondary: 'green',
  },
}