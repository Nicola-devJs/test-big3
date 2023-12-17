import {
   CSSObjectWithLabel,
   ControlProps,
   GroupBase,
   StylesConfig,
} from 'react-select'
import { IOptionItem } from './AppSelect'

export const StylesSelect = (props: {
   $form?: boolean
   $isTabletSelectPage?: boolean
   $isCenterText?: boolean
}): StylesConfig<IOptionItem, boolean, GroupBase<IOptionItem>> => ({
   control: (
      baseStyles: CSSObjectWithLabel,
      state: ControlProps<IOptionItem, boolean, GroupBase<IOptionItem>>
   ) => ({
      ...baseStyles,
      minHeight: props.$isTabletSelectPage ? '28px' : '40px',

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
      padding: props.$isTabletSelectPage ? '4px' : '8px',
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
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: 0,
      padding: props.$isTabletSelectPage ? '2px' : '2px 8px',
      fontSize: 15,
   }),
   singleValue: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      textAlign: props.$isCenterText ? 'center' : 'start',
   }),
   menu: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      zIndex: 5,
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
      padding: props.$isTabletSelectPage ? '6px 14px' : '8px 20px',
      ':not(:last-child)': {
         borderBottom: '1px solid #D1D1D1',
      },
      ':active': {
         backgroundColor: '#C60E2E',
      },
   }),
})
