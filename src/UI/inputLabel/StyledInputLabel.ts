import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'

export const StyledInputLabel = styled(StyledFlex)(
   (props) => `
   position: relative;
   height: max-content;
`
)

export const LabelText = styled.span(
   (props) => `
   color: ${props.theme.colors.g.gray};
   font-size: 14px;
   line-height: 170%;
   text-transform: capitalize;
   margin-bottom: 8px;
`
)
