import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'

export const StyledAddItem = styled(StyledFlex)(
   (props) => `
   width: 100%;
   padding: 48px 73px;
   border-radius: 0px 0px 10px 10px;
   background: #fff;
   gap: 24px;

   @media(max-width: 1150px) {
      flex-direction: column;
      align-items: center;

      & #load {
         width: 100%;
         height: 260px;
         padding: 0px 95px;

         div {
            width: 100%;
            height: 100%;
         }
      }
   }

   @media(${props.theme.media.maxNotebook}) {
      border-radius: 0px;
      padding: 48px;
      & #load {
         width: 100%;
         height: 260px;
         padding: 0px ${(95 / 676) * 100}%;
         
      }

   }
   @media(${props.theme.media.maxTablet}) {
      padding: 48px 24px;
   }

   @media(${props.theme.media.maxPhone}) {
      & #load {
         width: 100%;
         height: 144px;
         padding: 0px ${(59 / 353) * 100}%;
         
         div:after {
            width: 40px;
            height: 40px;
         }
      }
   }
`
)

export const AddItemFormWrapperFields = styled.div(
   (props) => `  
   flex: 0 1 366px;
   margin: 0 auto;

   & > *:not(:last-child) {
      margin-bottom: 24px;
   }

   @media(max-width: 1150px) {
      width: 100%;
      flex: 1 1 auto;
   }
`
)

export const AddItemFormContainerButtons = styled(StyledFlex)(
   (props) => `
   gap: 24px;

   & > button {
      width: 100%;
   }
`
)

export const AddItemFormContainerFields = styled(StyledFlex)(
   (props) => `
   gap: 24px;

   & > * {
      flex: 0 1 50%;
   }
`
)
