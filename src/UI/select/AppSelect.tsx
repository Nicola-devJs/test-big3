import React from 'react'
import AsyncSelect, { AsyncProps } from 'react-select/async'
import {
   OptionsOrGroups,
   GroupBase,
   OnChangeValue,
   ActionMeta,
} from 'react-select'
import { StylesSelect } from './AppSelectStyles'
import { InputLabel } from '../inputLabel/InputLabel'
import { SelectComponents } from 'react-select/dist/declarations/src/components'
import { AppSelectWrapper } from './components/StyledMultiValueContainer'

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

interface AppSelectProps
   extends AsyncProps<IOptionItem, boolean, GroupBase<IOptionItem>> {
   multi?: boolean
   options?: IOptionItem[]
   name: string
   isCloseMenuOnSelect?: boolean
   isClearable?: boolean
   selectedValue?: IOptionItem
   components?: Partial<
      SelectComponents<IOptionItem, boolean, GroupBase<IOptionItem>>
   >
   label?: string
   width: string
   $form?: boolean
   $isTabletSelectPage?: boolean
   $isCenterText?: boolean
   errorLabel?: string
   loadOptions?: loadOptionsType
   onChange?: (
      newValue: OnChangeValue<IOptionItem, boolean>,
      actionMeta: ActionMeta<IOptionItem>
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
         $isTabletSelectPage,
         $isCenterText,
         label,
         errorLabel,
         ...props
      },
      ref
   ) => {
      const stylesAppSelect = StylesSelect({
         $form,
         $isTabletSelectPage,
         $isCenterText,
      })

      return (
         <AppSelectWrapper width={width}>
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
         </AppSelectWrapper>
      )
   }
)
