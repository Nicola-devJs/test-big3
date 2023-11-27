import React, { useState } from 'react'
import { StyledInput, InputLabel, InputIsViewPassword } from './StyledInput'
import { InputInvalid } from '../inputInvalid/InputInvalid'

interface InputProps {
   label: string
   disabled?: boolean
   type?: 'text' | 'password'
   errorLabel?: string
}
type refNode = HTMLInputElement

export const Input = React.forwardRef<refNode, InputProps>(
   ({ label, errorLabel, type, ...props }, ref) => {
      const [viewPassword, setViewPassword] = useState(false)

      function setViewPasswordHandler() {
         setViewPassword((prev) => !prev)
      }

      return (
         <InputLabel as="label" $direction="column" $align="flex-start">
            {label}
            <StyledInput
               {...props}
               ref={ref}
               $isValid={!!errorLabel}
               type={viewPassword ? 'text' : type}
            />
            {type === 'password' && (
               <InputIsViewPassword
                  $isView={viewPassword}
                  onClick={setViewPasswordHandler}
               />
            )}
            {errorLabel && <InputInvalid>{errorLabel}</InputInvalid>}
         </InputLabel>
      )
   }
)
