import { CSSObjectWithLabel, ControlProps, StylesConfig } from 'react-select'

interface stylesSelectProps {
   width: string
}

export const stylesSelect = (props: stylesSelectProps): StylesConfig => ({
   control: (baseStyles: CSSObjectWithLabel, state: ControlProps) => ({
      ...baseStyles,
      minHeight: '40px',

      borderColor: '#D1D1D1',
      boxShadow: state.isFocused ? 'none' : '',
   }),
   container: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      width: props.width,
   }),
   multiValue: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      fontSize: '12px',
      backgroundColor: '#E4163A',
      color: '#fff',
      borderRadius: '4px',
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
   option: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      color: '#9C9C9C',
      fontSize: '14px',
      ':not(:last-child)': {
         borderBottom: '1px solid #D1D1D1',
      },
   }),
})
