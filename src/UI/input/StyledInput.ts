import { styled } from 'styled-components'
import openEye from '../../assets/icons/open_eye.svg'
import closeEye from '../../assets/icons/close_eye.svg'

export const InputIsViewPassword = styled.span<{ $isView: boolean }>(
   (props) => ({
      position: 'absolute',
      bottom: 12,
      right: 12,
      background: `url(${props.$isView ? openEye : closeEye}) no-repeat`,
      width: 16,
      height: 16,
      cursor: 'pointer',
   })
)

export const StyledInput = styled.input<{ $isValid: boolean }>(
   (props) => `
   width: 100%;
   height: 40px;
   border: none;
   border-radius: 4px;
   background: ${props.theme.colors.g.white};
   padding: 8px 12px;
   color: ${props.theme.colors.g.darkGray};
   font-size: 14px;
   line-height: 170%;
   transition: all .2s linear;
   position: relative;

   &:focus {
      outline: none;
   }

   &:hover {
      background: ${props.theme.colors.g.lighestGray};
   }

   &:disabled {
      color: ${props.theme.colors.g.lighestGray};
      pointer-events: none;
   }

   ${props.$isValid && `outline: 1px solid ${props.theme.colors.r.lighestRed};`}

   &[type='number']::-webkit-outer-spin-button,
   &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
   }

   &[type='number'],
   &[type='number']:hover,
   &[type='number']:focus {
      appearance: none;
      -moz-appearance: textfield;
   }

   
   &[type="date"] {
      font-family: ${props.theme.fonts.primary};
   }
}
`
)
