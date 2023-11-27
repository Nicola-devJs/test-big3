import styled from 'styled-components'

export const StyledInputInvalid = styled.span((props) => ({
   color: props.theme.colors.r.lighestRed,
   fontSize: 12,
   lineHeight: '150%',
   position: 'absolute',
   bottom: -20,
   left: 0,
   opacity: 1,
   textTransform: 'none',
}))
