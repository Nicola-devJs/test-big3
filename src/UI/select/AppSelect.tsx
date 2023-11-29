import React from 'react'
import Select from 'react-select'
import { stylesSelect } from './AppSelectStyles'

interface IOptionItem {
   value: string
   label: string
}

interface AppSelectProps {
   multi?: boolean
   options: IOptionItem[]
   name: string
   width: string
   isCloseMenuOnSelect?: boolean
   selectedValue?: IOptionItem
}

const AppSelect: React.FC<AppSelectProps> = ({
   multi,
   options,
   name,
   width,
   isCloseMenuOnSelect = true,
   selectedValue,
}) => {
   const stylesAppSelect = stylesSelect({ width })

   return (
      <Select
         closeMenuOnSelect={isCloseMenuOnSelect}
         isClearable={false}
         isMulti={multi}
         name={name}
         options={options}
         className={multi ? 'basic-multi-select' : 'basic-select'}
         classNamePrefix="select"
         styles={stylesAppSelect}
         menuPlacement="auto"
         defaultValue={selectedValue ? selectedValue : null}
      />
   )
}

export default AppSelect
