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
}

const AppSelect: React.FC<AppSelectProps> = ({ multi, options, name }) => {
   const stylesAppSelect = stylesSelect()

   return (
      <Select
         closeMenuOnSelect={false}
         isClearable={false}
         isMulti={multi}
         name={name}
         options={options}
         className={multi ? 'basic-multi-select' : 'basic-select'}
         classNamePrefix="select"
         styles={stylesAppSelect}
      />
   )
}

export default AppSelect
