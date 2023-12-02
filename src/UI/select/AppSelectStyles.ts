import { CSSObjectWithLabel, ControlProps, StylesConfig } from 'react-select'

export interface StylesSelectProps {
   $form?: boolean
}

export const StylesSelect = (props: StylesSelectProps): StylesConfig => ({
   control: (baseStyles: CSSObjectWithLabel, state: ControlProps) => ({
      ...baseStyles,
      minHeight: '40px',

      borderColor: props.$form ? 'transparent' : '#D1D1D1',
      boxShadow: state.isFocused ? 'none' : '',
      backgroundColor: props.$form ? '#F6F6F6' : '#fff',
      ':hover': {
         borderColor: state.menuIsOpen ? '#D1D1D1' : '#9C9C9C',
      },
   }),
   container: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      width: '100%',
   }),
   multiValue: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      fontSize: '12px',
      backgroundColor: '#E4163A',
      color: '#fff',
      borderRadius: '4px',
   }),
   clearIndicator: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      color: '#D1D1D1',
   }),
   dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      color: '#D1D1D1',
   }),
   multiValueLabel: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      color: '#fff',
      fontSize: '14px',
      fontWeight: 400,
   }),
   valueContainer: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      flexWrap: 'nowrap',
   }),
   input: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,

      ':after': {
         content: "'...'",
      },
   }),
   option: (baseStyles: CSSObjectWithLabel, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused
         ? '#FF768E'
         : state.isSelected
         ? '#C60E2E'
         : 'transparent',
      color: state.isFocused ? '#fff' : state.isSelected ? '#fff' : '#9C9C9C',
      fontSize: '14px',
      ':not(:last-child)': {
         borderBottom: '1px solid #D1D1D1',
      },
      ':active': {
         backgroundColor: '#C60E2E',
      },
   }),
})
