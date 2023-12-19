import { styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'

export const StyledHeader = styled(StyledFlex)(
   (props) => `
   width: 100%;
   height: ${props.theme.sizeBlock.heightHeader};
   background: #fff;
   box-shadow: 0px 1px 10px 0px rgba(209, 209, 209, 0.50);
   padding: 16px 51px;
   position: relative;
   z-index: 5;

   @media(${props.theme.media.maxTablet}) {
      justify-content: center;
      height: 62px;
   }
`
)

export const HeaderLogo = styled.img(
   (props) => `
   width: 191px;
   height: 48px;
   object-fit: contain;

   @media(${props.theme.media.maxTablet}) {
      width: 137px;
      height: 34px;
   }
`
)

export const HeaderMobileMenu = styled.div(
   (props) => `
   width: 18px;
   height: 12px;
   background: transparent;
   position: absolute;
   display: flex;
   align-items: center;
   left: 24px;
   top: 50%;
   transform: translateY(-50%);
   cursor: pointer;

   span {
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: rgba(0, 0, 0, 0.54);


      &:before, &:after {
         content: '';
         position: absolute;
         left: 0;
         rigth: 0;
         width: 100%;
         height: 2px;
         border-radius: 2px;
         background: rgba(0, 0, 0, 0.54);
      }

      &:before {
         top: 0;
      }

      &:after {
         bottom: 0;
      }
   }

   @media(${props.theme.media.maxPhone}) {
      left: 12px;
   }

`
)
