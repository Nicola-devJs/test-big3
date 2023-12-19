import { styled } from 'styled-components'
import { StyledFlex } from '../../../../common/components/styled/flex/StyledFlex'

export const ToolbarWrapper = styled(StyledFlex)(
   (props) => `
   gap: 24px;
   width: 100%;
   @media (${props.theme.media.maxNotebook}) {
      flex-wrap: wrap;
      gap: 16px;
      & > * {
         flex: 1 1 auto !important;
         min-width: 100% !important;
      }
     
   }
`
)
