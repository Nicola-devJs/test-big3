import React from 'react'
import { StyledButton, StyledButtonProps } from './StyledButton'

interface ButtonProps extends StyledButtonProps {
   children: string
   disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
   return (
      <StyledButton as="button" $align="center" $justify="center" {...props}>
         {children}
      </StyledButton>
   )
}
