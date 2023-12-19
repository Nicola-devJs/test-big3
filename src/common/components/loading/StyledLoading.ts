import { styled, keyframes, css } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'

const spiner = keyframes`
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
`

export const LoadingWrapper = styled(StyledFlex)(
   (props) => `
   width: 100%;
   height: 100%;
`
)

export const StyledLoading = styled.div(
   (props) => css`
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: transparent;
      border: 10px dashed rgba(200, 200, 200, 0.5);

      animation-name: ${spiner};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
   `
)
