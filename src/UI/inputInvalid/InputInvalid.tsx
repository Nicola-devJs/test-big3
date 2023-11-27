import React from 'react'
import { StyledInputInvalid } from './StyledInputInvalid'

interface InputInvalidProps {
   children: string
}

export const InputInvalid: React.FC<InputInvalidProps> = ({ children }) => {
   return <StyledInputInvalid>{children}</StyledInputInvalid>
}
