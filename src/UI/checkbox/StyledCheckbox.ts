import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'

export const StyledCheckbox = styled(StyledFlex)((props) => ({
   position: 'relative',
}))

export const LabelCheckbox = styled.span((props) => ({
   fontSize: 14,
   color: props.theme.colors.g.gray,
   cursor: 'pointer',
   transition: 'all .2s linear',
}))

export const CheckboxFake = styled.span(
   (props) => `
   width: 12px;
   height: 12px;
   border: 1px solid ${props.theme.colors.g.lightGray};
   border-radius: 2px;
   margin-right: 8px;
   backgound: #fff;
   transition: all .2s linear;
   cursor: pointer;
   position: relative;

   &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 8px;
      opacity: 0;
   }
`
)

export const CheckboxOriginal = styled.input<{ $isValid: boolean }>(
   (props) => `
      display: none;
      cursor: pointer;

      &:hover + ${CheckboxFake} {
         border: 1px solid ${props.theme.colors.r.red};
      }

      &:disabled + ${CheckboxFake} {
         border: 1px solid ${props.theme.colors.g.lighestGray};
         pointer-events: none;
         background: ${props.theme.colors.g.white};
      } 
      &:disabled ~ ${LabelCheckbox} {
         color: ${props.theme.colors.g.lighestGray};
         pointer-events: none;
      }

      &:checked + ${CheckboxFake} {
         background: ${props.theme.colors.r.red};
         border: 1px solid ${props.theme.colors.r.red};
         &:before {
            opacity: 1;
         }
      }

      &:checked:disabled + ${CheckboxFake} {
         background: ${props.theme.colors.g.lighestGray};
         border: 1px solid ${props.theme.colors.g.lighestGray};
      }

      ${
         props.$isValid &&
         `
         & ~ ${CheckboxFake} {
            border: 1px solid ${props.theme.colors.r.lighestRed};
         }
         & ~ ${LabelCheckbox} {
            color: ${props.theme.colors.r.lighestRed};
         }
      `
      }
`
)
