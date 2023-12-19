import { styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'

export const StyledEmpty = styled(StyledFlex)(
   (props) => `
   width: 100%;
   height: 100%;

   @media(${props.theme.media.maxTablet}) {
      align-items: flex-start;
   }
`
)

export const EmptyBody = styled.div`
   text-align: center;
   padding: 48px 18px;
`
