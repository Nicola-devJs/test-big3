import React from 'react'
import { StyledInputLabel, LabelText } from './StyledInputLabel'
import { InputInvalid } from '../inputInvalid/InputInvalid'

interface InputLabelProps {
   children: React.ReactNode
   label?: string
   errorLabel?: string
   id?: string
}

export const InputLabel: React.FC<InputLabelProps> = ({
   children,
   label,
   errorLabel,
   id,
}) => {
   return (
      <StyledInputLabel
         as="label"
         $direction="column"
         $align="flex-start"
         id={id}
      >
         {label && <LabelText>{label}</LabelText>}
         {children}
         {errorLabel && <InputInvalid>{errorLabel}</InputInvalid>}
      </StyledInputLabel>
   )
}
