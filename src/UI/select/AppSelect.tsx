import React from 'react'
import Select from 'react-select'
import { StylesSelect, StylesSelectProps } from './AppSelectStyles'
import { InputLabel } from '../inputLabel/InputLabel'

interface IOptionItem {
   value: string
   label: string
}

interface AppSelectProps extends StylesSelectProps {
   multi?: boolean
   options: IOptionItem[]
   name: string
   isCloseMenuOnSelect?: boolean
   isClearable?: boolean
   selectedValue?: IOptionItem
   label?: string
   width: string
   errorLabel?: string
}

type RefNode = any

const AppSelect = React.forwardRef<RefNode, AppSelectProps>(
   (
      {
         multi,
         options,
         name,
         width,
         isCloseMenuOnSelect = true,
         isClearable = false,
         selectedValue,
         $form,
         label,
         errorLabel,
         ...props
      },
      ref
   ) => {
      const stylesAppSelect = StylesSelect({ $form })

      return (
         <div style={{ flex: `0 1 ${width}` }}>
            <InputLabel label={label} errorLabel={errorLabel}>
               <Select
                  ref={ref}
                  {...props}
                  closeMenuOnSelect={isCloseMenuOnSelect}
                  isClearable={isClearable}
                  isMulti={multi}
                  name={name}
                  options={options}
                  className={multi ? 'basic-multi-select' : 'basic-select'}
                  classNamePrefix="select"
                  styles={stylesAppSelect}
                  menuPlacement="auto"
                  defaultValue={selectedValue ? selectedValue : null}
               />
            </InputLabel>
         </div>
      )
   }
)

export default AppSelect
