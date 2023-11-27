import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

ul {
   list-style: none;
}

a {
   color: inherit;
   text-decoration: none;
}

body {
   font-family: ${(props) => props.theme.fonts.primary};
   font-weight: 500;
   font-size: 16px;
}

`

export default GlobalStyles
