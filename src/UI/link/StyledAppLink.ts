import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const StyledAppLink = styled(Link)(
   (props) => `
   font-size: inherit;
   color: ${props.theme.colors.r.red};
   text-decoration: underline;
   &:hover {
      text-decoration: none;
   }
`
)
