import React, { ReactElement, ReactNode } from 'react'
import {
   GroupBase,
   MultiValueProps,
   components as RSComponents,
   ValueContainerProps,
} from 'react-select'
import { IOptionItem } from '../../../../UI/select/AppSelect'

export const AppSelectValueContainer: React.FC<
   ValueContainerProps<IOptionItem, boolean, GroupBase<IOptionItem>>
> = (props) => {
   const [multiValues] = props.children as [
      ReactElement<
         MultiValueProps<IOptionItem, boolean, GroupBase<IOptionItem>>
      >[],
      ReactNode
   ]

   return (
      <RSComponents.ValueContainer {...props}>
         <div
            style={{
               whiteSpace: 'nowrap',
               textOverflow: 'ellipsis',
               overflow: 'hidden',
               maxWidth: '100%',
            }}
         >
            {Array.isArray(multiValues) &&
               multiValues.map((child, _index) => (
                  <span
                     style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '4px',
                        backgroundColor: '#E4163A',
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: 400,
                        borderRadius: 4,
                        margin: '0px 4px',
                     }}
                     key={child.props.data.value}
                  >
                     <span style={{ color: '#fff' }}>
                        {child.props.data.label}
                     </span>
                     <span
                        style={{ marginLeft: 8, cursor: 'pointer' }}
                        onClick={() => {
                           child.props.clearValue()
                        }}
                     >
                        <svg
                           width="12"
                           height="12"
                           viewBox="0 0 12 12"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M9.15011 2.8551C9.05669 2.76147 8.92987 2.70886 8.79761 2.70886C8.66535 2.70886 8.53852 2.76147 8.44511 2.8551L6.00011 5.2951L3.55511 2.8501C3.46169 2.75647 3.33487 2.70386 3.20261 2.70386C3.07035 2.70386 2.94352 2.75647 2.85011 2.8501C2.65511 3.0451 2.65511 3.3601 2.85011 3.5551L5.29511 6.0001L2.85011 8.4451C2.65511 8.6401 2.65511 8.9551 2.85011 9.1501C3.04511 9.3451 3.36011 9.3451 3.55511 9.1501L6.00011 6.7051L8.44511 9.1501C8.64011 9.3451 8.95511 9.3451 9.15011 9.1501C9.34511 8.9551 9.34511 8.6401 9.15011 8.4451L6.70511 6.0001L9.15011 3.5551C9.34011 3.3651 9.34011 3.0451 9.15011 2.8551Z"
                              fill="white"
                           />
                        </svg>
                     </span>
                  </span>
               ))}
         </div>
      </RSComponents.ValueContainer>
   )
}
