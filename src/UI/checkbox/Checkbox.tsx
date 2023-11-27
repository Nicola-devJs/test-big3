import React from 'react'
import './assets/style.css'

import {
   StyledCheckbox,
   LabelCheckbox,
   CheckboxFake,
   CheckboxOriginal,
} from './StyledCheckbox'
import { InputInvalid } from '../inputInvalid/InputInvalid'

interface CheckboxProps {
   label: string
   disabled?: boolean
   checked?: boolean
   errorLabel?: string
}

type refNode = HTMLInputElement

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef<
   refNode,
   CheckboxProps
>(({ label, errorLabel, ...props }, ref) => {
   return (
      <StyledCheckbox as="label" $align="center">
         <CheckboxOriginal
            type="checkbox"
            {...props}
            ref={ref}
            $isValid={!!errorLabel}
         />
         <CheckboxFake className="icon-check" />
         <LabelCheckbox>{label}</LabelCheckbox>
         {errorLabel && <InputInvalid>{errorLabel}</InputInvalid>}
      </StyledCheckbox>
   )
})
