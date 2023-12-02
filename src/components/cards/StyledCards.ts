import { styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'

export const CardsWrapper = styled(StyledFlex)(
   (props) => `
   min-width: 100%;
   flex-wrap: wrap;
   margin: -12px;

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

   @media(${props.theme.media.maxTablet}) {
      flex: 0 1 50%;
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

export const CardImg = styled(StyledFlex)(
   () => `
   flex: 1 1 auto;

   img {
      width: 274px;
      height: 207px;
      object-fit: cover;
      object-position: center;
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
`
)
