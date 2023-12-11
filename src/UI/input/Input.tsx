import React, { useState } from 'react'
import { StyledInput, InputIsViewPassword } from './StyledInput'
import { InputLabel } from '../inputLabel/InputLabel'

export type typeInput = 'text' | 'password' | 'number' | 'date'

interface InputProps {
   label: string
   disabled?: boolean
   type?: typeInput
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
         <InputLabel label={label} errorLabel={errorLabel}>
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
         </InputLabel>
      )
   }
)
