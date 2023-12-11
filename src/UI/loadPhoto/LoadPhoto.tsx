import React, { ChangeEvent } from 'react'
import { StyledLoadPhoto } from './StyledLoadPhoto'
import { InputLabel } from '../inputLabel/InputLabel'

interface LoadPhotoProps {
   errorLabel?: string
   value: string
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

type RefNode = HTMLInputElement

export const LoadPhoto = React.forwardRef<RefNode, LoadPhotoProps>(
   ({ errorLabel, value, ...props }, ref) => {
      return (
         <InputLabel errorLabel={errorLabel} id="load">
            <input
               {...props}
               ref={ref}
               type="file"
               style={{ display: 'none' }}
               accept=".png, .jpg, .jpeg, .svg"
            />
            <StyledLoadPhoto
               $justify="center"
               $align="center"
               $urlPhoto={value}
            />
         </InputLabel>
      )
   }
)
