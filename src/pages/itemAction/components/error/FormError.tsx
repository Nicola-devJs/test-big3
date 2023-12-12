import React from 'react'
import { StyledFormError } from './StyledFormError'

interface FormErrorProps {
   status: number
   text: string
}

export const FormError: React.FC<FormErrorProps> = ({ status, text }) => {
   return (
      <StyledFormError $direction="column" $align="center">
         <span>{status}</span>
         <p>{text}</p>
      </StyledFormError>
   )
}
