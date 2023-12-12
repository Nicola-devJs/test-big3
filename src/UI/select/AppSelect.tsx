import React from 'react'
import AsyncSelect from 'react-select/async'
import {
   OptionsOrGroups,
   GroupBase,
   OnChangeValue,
   ActionMeta,
} from 'react-select'
import { StylesSelect, StylesSelectProps } from './AppSelectStyles'
import { InputLabel } from '../inputLabel/InputLabel'

export interface IOptionItem {
   value: string | number
   label: string
}

export type loadOptionsType = (
   inputValue: string,
   callback: (
      options: OptionsOrGroups<IOptionItem, GroupBase<IOptionItem>>
   ) => void
) => Promise<OptionsOrGroups<IOptionItem, GroupBase<IOptionItem>>> | void

interface AppSelectProps extends StylesSelectProps {
   multi?: boolean
   options?: IOptionItem[]
   name: string
   isCloseMenuOnSelect?: boolean
   isClearable?: boolean
   selectedValue?: IOptionItem
   label?: string
   width: string
   errorLabel?: string
   loadOptions?: loadOptionsType
   onChange?: (
      newValue: OnChangeValue<any, boolean>,
      actionMeta: ActionMeta<any>
   ) => void
}

type RefNode = any

export const AppSelect = React.forwardRef<RefNode, AppSelectProps>(
   (
      {
         multi,
         options,
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
         <div style={{ flex: `0 1 ${width}`, maxWidth: width }}>
            <InputLabel label={label} errorLabel={errorLabel}>
               <AsyncSelect
                  ref={ref}
                  {...props}
                  closeMenuOnSelect={isCloseMenuOnSelect}
                  isClearable={isClearable}
                  isMulti={multi}
                  defaultOptions={options ? options : true}
                  isSearchable={false}
                  styles={stylesAppSelect}
                  menuPlacement="auto"
                  defaultValue={selectedValue ? selectedValue : null}
                  cacheOptions
               />
            </InputLabel>
         </div>
      )
   }
)
