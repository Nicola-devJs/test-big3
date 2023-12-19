import { styled } from 'styled-components'
import { StyledFlex } from '../../../../common/components/styled/flex/StyledFlex'

export const StyledFormError = styled(StyledFlex)(
   (props) => `
   width: 100%;
   padding: 45px;
   color: ${props.theme.colors.g.darkGray};
   font-size: 18px;
   span {
      color: ${props.theme.colors.r.lightRed};
      font-size: 36px;
      font-weight: 600;
      font-family: ${props.theme.fonts.secondary};
   }
`
)
