import { styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'

export interface StyledBreadcrumbsProps {
   $border?: boolean
}

export const StyledBreadcrumbs = styled(StyledFlex)<StyledBreadcrumbsProps>(
   (props) => `
   width: 100%;
   padding: 24px 32px;
   border-radius: 10px 10px 0px 0px;
   ${
      props.$border
         ? `border: 0.5px solid ${props.theme.colors.g.lightGray};`
         : ''
   }
   background: #fff;

   p {
      color: ${props.theme.colors.r.red};
      font-size: 14px;
   }

   span {
      color: ${props.theme.colors.g.lightGray};
   }

   @media(${props.theme.media.maxNotebook}) {
      border-radius: 0px;
      padding: 24px;
   }

   @media(${props.theme.media.maxTablet}) {
      padding: 16px;
   }
`
)
