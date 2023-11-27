import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'

export const StyledNotFound = styled(StyledFlex)(() => ({
   width: '100%',
   height: '100vh',
   padding: 45,
   textAlign: 'center',
}))

export const NotFoundImg = styled.div(
   (props) => `
   max-width: 380px;
   max-height: 212px;
   margin-bottom: 48px;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`
)

export const NotFoundTitle = styled.h1(
   (props) => `
   color: ${props.theme.colors.r.lighestRed};
   font-weight: 800;
   font-size: 36px;
   margin-bottom: 24px;
`
)

export const NotFoundText = styled.p(
   (props) => `
   font-size: 24px;
   color: ${props.theme.colors.g.gray};
`
)
