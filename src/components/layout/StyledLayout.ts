import { styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'

export const StyledLayout = styled(StyledFlex)((props) => ({
   width: '100%',
   minHeight: '100vh',
}))

export const LayoutWrapperMain = styled(StyledFlex)(
   (props) => `
   flex: 1 1 auto;

   @media(${props.theme.media.maxTablet}) {
      position: relative;
   }
`
)
