import { styled } from 'styled-components'
import { StyledFlex } from '../flex/StyledFlex'

export const StyledMain = styled(StyledFlex)((props) => ({
   background: props.theme.colors.g.white,
   flex: '1 1 auto',
}))

export const MainBody = styled(StyledFlex)(
   (props) => `
   padding: 32px 80px;
   width: 100%;

   @media(${props.theme.media.maxTablet}) {
      padding: 24px;
   }
`
)

export const MainToolbar = styled(StyledFlex)(
   (props) => `
   width: 100%;
   height: 40px;
   margin-bottom: 32px;
   gap: 24px;

`
)

export const MainPagination = styled(StyledFlex)(
   () => `
   width: 100%;
   height: 40px;
   margin-top: 32px;
   justify-content: space-between;
`
)

export const MainContent = styled.div(
   () => `
   width: 100%;
   flex: 1 1 auto;
`
)
