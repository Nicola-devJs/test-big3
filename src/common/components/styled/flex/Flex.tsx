import React from 'react'
import { StyledFlexProps, StyledFlex } from './StyledFlex'

interface FlexProps extends StyledFlexProps {
   children: React.ReactNode | React.ReactElement
}

export const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
   return <StyledFlex {...props}>{children}</StyledFlex>
}
