import { styled, keyframes, css } from 'styled-components'
import { StyledFlex } from '../../common/components/styled/flex/StyledFlex'

export interface StyledButtonProps {
   width?: string
   $icon?: string
   $secondary?: boolean
   $loading?: boolean
}

const spiner = keyframes`
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
`

export const StyledButton = styled(StyledFlex)<StyledButtonProps>(
   (props) => css`
      height: 40px;
      padding: 8px 24px;
      background: ${props.theme.colors.r.red};
      border-radius: 4px;
      width: ${props.width ? props.width : 'max-content'};
      color: #fff;
      font-size: 15px;
      border: none;
      transition: all 0.2s linear;
      cursor: pointer;
      position: relative;

      ${props.$icon
         ? `&::after {
               content: '${props.$icon}';
               width: 16px;
               height: 16px;
               margin-left: 8px;
               font-size: 18px;
               display: flex;
               align-items: center;
               justify-content: center;
               
            }`
         : ''}

      &:hover {
         background: ${props.theme.colors.r.lightRed};
      }
      &:active {
         background: ${props.theme.colors.r.darkRed};
      }
      &:disabled {
         background: ${props.theme.colors.g.white};
         color: ${props.theme.colors.g.lighestGray};
         pointer-events: none;
      }

      ${props.$loading &&
      css`
         &:after {
            content: '';
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: transparent;
            border: 3px dashed rgba(200, 200, 200, 0.5);

            position: absolute;
            animation-name: ${spiner};
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
         }
      `}

      ${props.$secondary &&
      `
      border: 1px solid ${props.theme.colors.g.lightGray};
      color: ${props.theme.colors.g.lightGray};
      background: transparent;
      transition: all .2s linear;

      &:hover {
         background: ${props.theme.colors.g.lighestGray};
         
      }
      &:active {
         background: ${props.theme.colors.g.lightGray};
         border: 1px solid ${props.theme.colors.g.gray};
         color: ${props.theme.colors.g.gray};
      }
      &:disabled {
         background: ${props.theme.colors.g.white};
         color: ${props.theme.colors.g.lighestGray};
         border: 1px solid ${props.theme.colors.g.lightGray};
         pointer-events: none;
      }
   `}
   `
)
