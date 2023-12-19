import { styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'

export const CardsWrapper = styled(StyledFlex)(
   (props) => `
   min-width: 100%;
   margin: -12px;
   
   flex-wrap: wrap;
`
)

export const CardItem = styled.div(
   (props) => `
   flex: 0 1 33.333%;
   height: 404px;
   padding: 12px;

   @media(min-width: 1600px) {
      flex: 0 1 25%;
   }

   @media(max-width: 1200px) {
      flex: 0 1 50%;
   }

   @media(${props.theme.media.maxTablet}) {
      height: auto;
      min-height: 180px;
   }
`
)

export const CardBody = styled(StyledFlex)(
   () => `
   background: linear-gradient(122deg, #707070 1.62%, #393939 81.02%);
   width: 100%;
   height: 100%;
   border-radius: 4px;
`
)

export const CardImg = styled(StyledFlex)<{ $whatPage: string }>(
   (props) => `
   flex: 1 1 auto;
   align-items: ${props.$whatPage === 'teams' ? 'center' : 'flex-end'};

   img {
      width: ${props.$whatPage === 'teams' ? 150 : 274}px;
      height: ${props.$whatPage === 'teams' ? 150 : 207}px;
      object-fit: cover;
      object-position: bottom;
   }

   @media(${props.theme.media.maxTablet}) {
      padding: ${
         props.$whatPage === 'teams' ? '32px 56px 25px' : '11px 24px 0px'
      };
      img {
         width: 100%;
         height: 100%;

         object-fit: contain;
      }
   }

   @media(${props.theme.media.maxPhone}) {
      padding: ${props.$whatPage === 'teams' ? '11px 24px' : '11px 24px 0px'};
   }
`
)

export const CardInfo = styled.div(
   (props) => `
   width: 100%;
   height: 100px;
   background: ${props.theme.colors.g.darkGray};
   border-radius: 0px 0px 4px 4px;
   position: relative;
   z-index: 2;
   text-align: center;
   padding: 21px;

   h4 {
      font-size: 18px;
      color: #fff;
      font-family: ${props.theme.fonts.secondary};
      font-weight: 600;
      margin-bottom: 12px;

      span {
         color: ${props.theme.colors.r.lightRed};
      }
   }

   p {
      font-size: 14px;
      color: ${props.theme.colors.g.lightGray};
      
   }

   @media(${props.theme.media.maxTablet}) {
      padding: 16px 3px;
      height: max-content;
      h4 {
         font-size: 15px;
         font-family: ${props.theme.fonts.primary};
         font-weight: 500;
         margin-bottom: 6px;
      }

      p {
         font-size: 13px;
      }
   }

   @media(${props.theme.media.maxPhone}) {
      padding: 12px 3px;
   }
`
)
