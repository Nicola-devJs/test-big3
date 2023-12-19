import { css, styled } from 'styled-components'
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

export const OverlayToOpenMenu = styled.div<{ $activeMenu: boolean }>(
   (props) => `
   position: static;
   left: 200px;
   bottom: 0;
   right: 0;
   top: 0;
   background: rgba(65, 65, 65, 0.6);
   z-index: 15;
   opacity: 0;
   transition: all .2s ease-in-out .1s;

   ${
      props.$activeMenu &&
      css`
         opacity: 1;
         position: absolute;
      `
   }
`
)
