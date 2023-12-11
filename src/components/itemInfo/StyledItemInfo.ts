import { styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'

export const StyledItemInfo = styled(StyledFlex)(
   (props) => `
   width: 100%;
   background: linear-gradient(276deg, #707070 0%, #393939 100.28%);
   border-radius: 0px 0px 10px 10px;

   @media(${props.theme.media.maxNotebook}) {
      flex-direction: column;
      align-items: center;
      border-radius: 0px;
      padding: 48px;
   }
`
)

export const ItemInfoImg = styled(StyledFlex)<{ $whatPage: string }>(
   (props) => `
   flex: 0 1 50%;
   
   align-items: ${props.$whatPage === 'teams' ? 'center' : 'flex-end'};
   

   img {
      width: ${props.$whatPage === 'teams' ? '210px' : '100%'};
      height: ${props.$whatPage === 'teams' ? '210px' : '100%'};
      object-fit: contain;
      object-position: bottom;
   }

   @media(${props.theme.media.minNotebook}) {
      padding: 0px 56px 0px 40px;
   }

   @media(${props.theme.media.maxNotebook}) {
      padding: 0px 0px 48px 0px;
      flex: 1 1 auto;
   }

   @media(${props.theme.media.maxTablet}) {
      padding: 0px 68px 48px 68px;
      img {
         max-width: 100%;
         max-height: 100%;
         width: 100%;
         height: 100%;
      }
   }

   @media(${props.theme.media.maxPhone}) {
      padding: 0px 24px 48px 24px;
   }
`
)

export const ItemInfoContent = styled.div(
   (props) => `
   flex: 0 1 50%;
   

   @media(${props.theme.media.minNotebook}) {
      padding: 65px 65px 65px 0px;
   }

   @media(${props.theme.media.maxNotebook}) {
      flex: 1 1 auto;
      text-align: center;
   }
`
)

export const ItemInfoTitle = styled.h2(
   (props) => `
   color: #fff;
   font-size: 36px;
   font-weight: 800;
   margin-bottom: 40px;

   span {
      color: ${props.theme.colors.r.lightRed};
   }

   @media(${props.theme.media.maxNotebook}) {
      font-size: 24px;
      margin-bottom: 48px;
   }

   @media(${props.theme.media.maxPhone}) {
      font-size: 17px;
   }
`
)

export const ItemInfoList = styled(StyledFlex)(
   (props) => `
   width: 100%;
   flex-wrap: wrap;
   margin: 0px -12px;

   @media(${props.theme.media.maxNotebook}) {
      justify-content: center;
   }

   @media(${props.theme.media.maxPhone}) {
      margin: 0px;
      flex-direction: column;
   }
`
)

export const ItemInfoListItem = styled.li(
   (props) => `
   color: #fff;
   flex: 0 1 50%;
   padding: 0px 12px;

   p {
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;
   }

   span {
      font-size: 18px;
   }

   &:not(:last-child) {
      margin-bottom: 54px;
   }

   @media(${props.theme.media.maxNotebook}) {
      p {
         font-size: 20px;
      }

      span {
         font-size: 15px;
      }

      &:not(:last-child) {
         margin-bottom: 32px;
      }
   }

   @media(${props.theme.media.maxPhone}) {
      flex: 1 1 100%;
      padding: 0px;

      p {
         font-size: 17px;
      }
   }
`
)

export const ItemInfoTools = styled(StyledFlex)(
   (props) => `
   gap: 16px;
`
)

export const ItemInfoToolsItem = styled.span<{ $red?: boolean }>(
   (props) => `
   &:before {
      font-size: 24px;
      color: ${
         props.$red ? props.theme.colors.r.red : props.theme.colors.g.lightGray
      };
      cursor: pointer;
   }
`
)
