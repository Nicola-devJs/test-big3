import { styled } from 'styled-components'

export interface StyledFlexProps {
   $direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
   $align?: 'center' | 'flex-start' | 'flex-end'
   $justify?: 'space-between' | 'center' | 'flex-start' | 'flex-end'
}

export const StyledFlex = styled.div<StyledFlexProps>((props) => ({
   display: 'flex',
   alignItems: props.$align ? props.$align : 'stretch',
   justifyContent: props.$justify ? props.$justify : 'stretch',
   flexDirection: props.$direction ? props.$direction : 'row',
}))
