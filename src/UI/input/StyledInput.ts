import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'
import openEye from '../../assets/icons/open_eye.svg'
import closeEye from '../../assets/icons/close_eye.svg'

export const InputLabel = styled(StyledFlex)((props) => ({
   color: props.theme.colors.g.gray,
   fontSize: 14,
   lineHeight: '170%',
   marginBottom: 8,
   textTransform: 'capitalize',
   position: 'relative',
   width: '100%',
}))

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
`
)
