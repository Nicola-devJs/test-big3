import React, { ReactElement, ReactNode } from 'react'
import {
   GroupBase,
   MultiValueProps,
   components as RSComponents,
   ValueContainerProps,
} from 'react-select'
import { IOptionItem } from '../AppSelect'
import {
   MultiValueContainerBody,
   MultiValueContainerPlaceholder,
} from './StyledMultiValueContainer'

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
         <MultiValueContainerBody>
            {Array.isArray(multiValues) ? (
               multiValues.map((child) => (
                  <div
                     key={child.key}
                     style={{
                        display: 'inline-flex',
                     }}
                  >
                     <RSComponents.MultiValue {...child.props} />
                  </div>
               ))
            ) : (
               <MultiValueContainerPlaceholder>
                  Select...
               </MultiValueContainerPlaceholder>
            )}
         </MultiValueContainerBody>
      </RSComponents.ValueContainer>
   )
}
