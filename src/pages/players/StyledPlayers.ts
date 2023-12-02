import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'

export const ToolbarWrapper = styled(StyledFlex)(
   (props) => `
   gap: 24px;
   width: 100%;
   @media (${props.theme.media.maxNotebook}) {
      flex-wrap: wrap;
      gap: 16px;
      & > * {
         flex: 1 1 100% !important;
         
      }
     
   }
`
)
