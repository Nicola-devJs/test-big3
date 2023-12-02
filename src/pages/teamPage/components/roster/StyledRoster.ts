import { styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'

export const StyledRoster = styled.table(
   (props) => `
   width: 100%;
   table-layout: fixed;
   border: 0.5px solid ${props.theme.colors.g.lightGray};
   border-radius: 10px;
   margin-top: 24px;
   border-spacing: 0px;
   color: ${props.theme.colors.g.gray};
`
)

export const RosterRow = styled(StyledFlex)(
   (props) => `
   padding-left: 32px;
   width: 100%;
   align-items: center;
   gap: 24px;
   border-bottom: 0.5px solid ${props.theme.colors.g.lightGray};

   td {
      font-size: 14px;
   }

   @media(${props.theme.media.maxTablet}) {
      padding-left: 16px;
      td {
         font-size: 15px;
      }
   }
`
)

export const RosterHead = styled.thead(
   (props) => `

   ${RosterRow} {
      height: 54px;

      th {
         font-size: 18px;
         font-weight: 500;
      }
   }
   
   @media(${props.theme.media.maxTablet}) {
      ${RosterRow} {
         height: 48px;

         th {
            font-size: 15px;
         }
      }
   }
`
)

export const RosterBody = styled.tbody(
   (props) => `
   ${RosterRow} {
      height: 56px;

      &:first-child {
         height: 40px;
      }

      &:last-child {
         border-bottom: none;
      }

      td {
         text-align: center;
         &:nth-child(1) {
            flex: 0 1 36px;
         }
         &:nth-child(2) {
            text-align: start;
            flex: 1 1 auto;
         }
         &:nth-child(3), &:nth-child(4), &:nth-child(5) {
            flex: 0 1 10.8%;
         }
      }
   }

   @media(${props.theme.media.maxTablet}) {
      ${RosterRow} {


         &:first-child {
            height: 36px;
         }

      }
   }

   @media(max-width: 600px) {
      ${RosterRow} {
         td {
            &:nth-child(3), &:nth-child(4), &:nth-child(5) {
               display: none;
            }
         }
      }
   }
`
)

export const RosterPlayerCell = styled(StyledFlex)(
   (props) => `
   gap: 10px;

   img {
      width: 52px;
      height: 38px;
      object-fit: cover;
      object-position: center;
   }

   div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      span {
         font-size: 12px;
         color: ${props.theme.colors.g.lightGray};
      }
   }

   @media(${props.theme.media.maxTablet}) {
      div span {
         font-size: 13px;
      }
   }
`
)
