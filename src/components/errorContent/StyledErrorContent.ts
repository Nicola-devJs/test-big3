import { styled } from 'styled-components'

export interface ErrorImgProps {
   $sizeImg: {
      w: number
      h: number
   }
}

export const ErrorImg = styled.div<ErrorImgProps>(
   (props) => `
   max-width: ${props.$sizeImg.w}px;
   max-height: ${props.$sizeImg.h}px;
   margin-bottom: 48px;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
   }
`
)

export const ErrorTitle = styled.h1(
   (props) => `
   color: ${props.theme.colors.r.lighestRed};
   font-weight: 800;
   font-size: 36px;
   margin-bottom: 24px;

   @media(${props.theme.media.maxTablet}) {
      font-size: 26px;
      margin-bottom: 16px;
   }

   @media(${props.theme.media.maxPhone}) {
      font-size: 17px;
   }
`
)

export const ErrorText = styled.p(
   (props) => `
   font-size: 24px;
   color: ${props.theme.colors.g.gray};

   @media(${props.theme.media.maxTablet}) {
      font-size: 19px;
   }

   @media(${props.theme.media.maxPhone}) {
      font-size: 15px;
   }
`
)
